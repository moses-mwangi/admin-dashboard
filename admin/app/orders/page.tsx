import { Card } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import { sort } from "fast-sort";
import React from "react";
import Pagination from "../Componenets/Pagination";

import { Condition } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import FilterOrders from "./FilterOrders";
import SortOrders from "./SortOrders";
import OrdersTable from "./OrdersTable";

interface Props {
  searchParams: {
    page: string;
    Status: Condition | "All";
    SortBy: string;
  };
}

export default async function OrdersPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const pageSize = 10;

  const orders =
    searchParams.Status === "All"
      ? await prisma.orders.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize,
        })
      : await prisma.orders.findMany({
          where: { status: searchParams.Status },
          skip: (page - 1) * pageSize,
          take: pageSize,
        });

  const count =
    searchParams.Status === "All"
      ? await prisma.orders.count()
      : await prisma.orders.count({ where: { status: searchParams.Status } });

  const sortProduct = sort(orders).asc((order) =>
    searchParams.SortBy === "Name"
      ? order.status
      : searchParams.SortBy === "Status"
      ? order.name
      : searchParams.SortBy === "Date"
      ? order.date
      : order.amount
  );

  return (
    <div className="overflow-y-scroll scroll-m-1  h-[90svh]">
      <div className="flex justify-between pt-5 items-center">
        <h1 className=" text-[30px] font-medium">All Orders</h1>

        <div className="flex gap-4 mt-5">
          <FilterOrders searchedStatus={searchParams} />
          <SortOrders />
          <Link href="/Orders/addProduct">
            <Button className=" opacity-95">
              <PlusIcon className=" mr-[2px] rounded-full border" />
              Add product
            </Button>
          </Link>
        </div>
      </div>

      <Card className="mt-6 mb-7">
        <OrdersTable orders={sortProduct} />
        <Pagination currentPage={page} pageSize={pageSize} itemCount={count} />
      </Card>
    </div>
  );
}

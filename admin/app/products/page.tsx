import { Card } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import { sort } from "fast-sort";
import React from "react";
import Pagination from "../Componenets/Pagination";

import FilterProducts from "./FilterProducts";
import ProductsTable from "./ProductsTable";
import { Products, Status } from "@prisma/client";
import SortProducts from "./SortProducts";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  searchParams: {
    page: string;
    Status: Status | "All";
    SortBy: string;
  };
}

export default async function ProductPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const pageSize = 10;

  const products =
    searchParams.Status === "All"
      ? await prisma.products.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize,
        })
      : await prisma.products.findMany({
          where: { status: searchParams.Status },
          skip: (page - 1) * pageSize,
          take: pageSize,
        });

  const count =
    searchParams.Status === "All"
      ? await prisma.products.count()
      : await prisma.products.count({ where: { status: searchParams.Status } });

  const sortProduct = sort(products).asc((product) =>
    searchParams.SortBy === "Status"
      ? product.status
      : searchParams.SortBy === "Name"
      ? product.name
      : searchParams.SortBy === "Price"
      ? product.price
      : product.createdAt
  );

  return (
    <div className="overflow-y-scroll scroll-m-1  h-[90svh]">
      <div className="flex justify-between pt-5 items-center">
        <h1 className=" text-[30px] font-medium">All products</h1>
        {/* <FilterProducts searchedStatus={searchParams} /> */}
        <div className="flex gap-4">
          <FilterProducts searchedStatus={searchParams} />
          <SortProducts />
          <Link href="/products/addProduct">
            <Button className=" opacity-95">
              <PlusIcon className=" mr-[2px] rounded-full border" />
              Add product
            </Button>
          </Link>
        </div>
      </div>

      <Card className="mt-6 mb-7">
        <ProductsTable products={sortProduct} />
        <Pagination currentPage={page} pageSize={pageSize} itemCount={count} />
      </Card>
    </div>
  );
}

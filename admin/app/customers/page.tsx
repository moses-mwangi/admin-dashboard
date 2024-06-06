import { Montserrat, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";
import React from "react";
import { prisma } from "@/prisma/client";
import Pagination from "../Componenets/Pagination";
import TableCustomers from "./TableCustomers";

const montserat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-mont",
});

interface Props {
  searchParams: {
    page: string;
    sortBy: string;
  };
}

export default async function CustomersPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const pageSize = 10;

  const validSortFields = ["lastName", "email"];
  const sortField = validSortFields.includes(searchParams.sortBy as string)
    ? searchParams.sortBy
    : "firstName";

  const customers = await prisma.customer.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: { [sortField as string]: "asc" },
  });

  const count = await prisma.customer.count();

  return (
    <div className=" flex flex-col overflow-y-scroll scroll-m-1  h-[90svh]">
      <h1
        className={`${cn(
          montserat.variable
        )} mx-auto text-[32px] font-semibold p-3 mb-3`}
      >
        All our customers
      </h1>
      <Card className=" rounded-sm mt-3 p-2">
        <TableCustomers customers={customers} />

        <Pagination currentPage={page} pageSize={pageSize} itemCount={count} />
      </Card>
    </div>
  );
}

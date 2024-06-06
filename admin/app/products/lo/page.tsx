import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Products } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  products: Products[];
}

export default async function ProductsTable() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className=" flex flex-col mt-5">
      <div className=" flex justify-between">
        <Skeleton className=" w-[10%] h-4" />

        <Skeleton className=" w-[20%] h-7" />
        <Skeleton className=" w-[13%] h-7" />
        <Skeleton className=" w-[7%] h-7" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>
              <Skeleton className=" h-4 w-full" />
            </TableHead>
            <TableHead>
              <Skeleton className=" h-4 w-full" />
            </TableHead>
            <TableHead>
              <Skeleton className=" h-4 w-full" />
            </TableHead>
            <TableHead>
              <Skeleton className=" h-4 w-full" />
            </TableHead>
            <TableHead>
              <Skeleton className=" h-4 w-full" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product}>
              <TableCell>
                <Skeleton className=" h-12 w-[50%]" />
              </TableCell>
              <TableCell>
                <Skeleton className=" h-4 w-full" />
              </TableCell>
              <TableCell>
                <Skeleton className=" h-4 w-full" />
              </TableCell>
              <TableCell>
                <Skeleton className=" h-4 w-full" />
              </TableCell>
              <TableCell>
                <Skeleton className=" h-4 w-full" />
              </TableCell>
              <TableCell>
                <Skeleton className=" h-4 w-full" />
              </TableCell>
              <TableCell>
                <Skeleton className=" h-5 w-2" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

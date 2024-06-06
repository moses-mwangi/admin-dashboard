import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Orders, Products } from "@prisma/client";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Props {
  orders: Orders[];
}

export default async function OrdersTable({ orders }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>
              <Link
                href={`/orders/${order.id}`}
                className=" flex flex-col text-blue-400 hover:text-blue-500"
              >
                <span>{order.name}</span>
                <span>{order.email}</span>
              </Link>
            </TableCell>
            <TableCell>{order.type}</TableCell>
            <TableCell>
              <Badge>{order.status}</Badge>
            </TableCell>
            <TableCell>{order.date.toDateString()}</TableCell>
            <TableCell>{order.amount}</TableCell>
            <TableCell>
              <span className="p-2 hover:bg-slate-800 rounded-sm">
                <DotsVerticalIcon className=" h-4 w-4 flex items-center" />
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

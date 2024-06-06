"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  customers: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export default function TableCustomers({ customers }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Table>
      <TableHeader>
        <TableRow className="text-[17px]">
          <TableHead>
            <span
              onClick={() => {
                const params = new URLSearchParams(searchParams);
                params.set("sortBy", "lastName");
                router.push("?" + params.toString());
                router.refresh();
              }}
              className=" cursor-pointer hover:text-slate-300"
            >
              FullName
            </span>
          </TableHead>
          <TableHead>
            <span
              onClick={() => {
                const params = new URLSearchParams(searchParams);
                params.set("sortBy", "email");
                router.push("?" + params.toString());
                router.refresh();
              }}
              className=" cursor-pointer hover:text-slate-300"
            >
              Email
            </span>
          </TableHead>
          <TableHead>Country</TableHead>
          <TableHead>State</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow
            key={customer.id}
            className=" text-[14px] tracking-normal font-light"
          >
            <TableCell className=" p-4">
              <Link
                href={`/customers/${customer.id}`}
                className="text-blue-500 hover:text-blue-600"
              >
                {customer.lastName} {customer.firstName}
              </Link>
            </TableCell>

            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.country}</TableCell>
            <TableCell>{customer.state}</TableCell>
            <TableCell>{customer.createdAt.toDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { Status } from "@prisma/client";

const orders = [
  { label: "Name" },
  { label: "Status" },
  { label: "Date" },
  { label: "Amount" },
];

export default function SortOrders() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select
      defaultValue={searchParams.get("SortBy") || ""}
      onValueChange={(order) => {
        const params = new URLSearchParams(searchParams);
        params.set("SortBy", order.toString());
        router.push("?" + params.toString());
        router.refresh();
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        {orders.map((order) => (
          <SelectItem key={order.label} value={order.label}>
            {order.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

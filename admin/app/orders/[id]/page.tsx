import { Card } from "@/components/ui/card";
import { SelectSeparator } from "@/components/ui/select";
import { prisma } from "@/prisma/client";
import React from "react";
import DeleteOrder from "./DeleteOrder";

interface Props {
  params: { id: string };
}

export default async function page({ params }: Props) {
  const order = await prisma.orders.findUnique({
    where: { id: parseInt(params.id) },
  });

  return (
    <Card className=" w-[60%]  mx-auto mt-5 rounded-sm">
      <div className=" bg-slate-800 p-5 flex flex-row justify-between items-center">
        <span className=" flex flex-col">
          <h1 className=" text-[20px] font-medium opacity-85">
            Order : {order?.id}
          </h1>
          <p>Date {order?.date.toDateString()}</p>
        </span>

        <span className=" hover:bg-slate-800 p-3 rounded-full hover:text-red-600 transition-colors">
          <DeleteOrder params={params} />
        </span>
      </div>
      <div className=" p-5">
        <div className=" mb-4">
          <h1 className=" text-[18px] font-medium opacity-90">Order details</h1>
          <span className="flex flex-row justify-between items-center text-[16px] opacity-70">
            <p>Customer</p>
            <p>${order?.amount ? order?.amount * 10 : 5000}</p>
          </span>
        </div>
        <SelectSeparator />
        <div className="flex flex-col gap-3 mt-4">
          <h1 className=" text-[18px] font-medium opacity-90">
            Customer Information
          </h1>
          <span className="flex flex-row justify-between items-center text-[16px] opacity-70">
            <p>Customer</p>
            <p>{order?.name}</p>
          </span>
          <span className="flex flex-row justify-between items-center opacity-70">
            <p>Email</p>
            <p>{order?.email}</p>
          </span>
          <span className="flex flex-row justify-between items-center opacity-70">
            <p>Phone</p>
            <p>+{order?.tel}</p>
          </span>
        </div>
      </div>
    </Card>
  );
}

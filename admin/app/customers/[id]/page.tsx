import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SelectSeparator } from "@/components/ui/select";
import { prisma } from "@/prisma/client";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import Link from "next/link";
import React from "react";
import DeleteCustomer from "./DeleteCustomer";

interface Props {
  params: { id: string };
}

export default async function page({ params }: Props) {
  const customer = await prisma.customer.findUnique({
    where: { id: parseInt(params.id) },
  });

  return (
    <div>
      <Card className=" rounded-sm w-[60%] mx-auto mt-5 ">
        <span className="flex justify-center p-4 bg-slate-900 border-b-4 mb-4">
          <h1 className=" text-2xl font-medium">
            All our Customer #{customer?.id} Details
          </h1>
        </span>

        <div className="overflow-y-scroll scroll-m-1 h-[70svh]">
          <div className="mx-5 flex flex-col gap-3 opacity-90">
            <span className="flex flex-row gap-7">
              <h2 className=" mr-10">Customer Name :</h2>
              <p className=" text-[15px] font-light">
                {customer?.firstName} {customer?.lastName}
              </p>
            </span>
            <SelectSeparator />
            <span className="flex flex-row gap-7">
              <h2 className=" font-normal">Customer Email :</h2>
              <p className=" text-[15px] font-light">{customer?.email}</p>
            </span>
            <SelectSeparator />
            <span className="flex flex-row gap-7">
              <h2 className=" ">Customer Country :</h2>
              <p className=" text-[15px] font-light">{customer?.country}</p>
            </span>
            <SelectSeparator />
            <span className="flex flex-row gap-7">
              <h2 className=" ">Customer State :</h2>
              <p className=" text-[15px] font-light">{customer?.state}</p>
            </span>
            <SelectSeparator />
            <span className="flex flex-row gap-7">
              <h2 className=" ">Customer City :</h2>
              <p className=" text-[15px] font-light">{customer?.city}</p>
            </span>
            <SelectSeparator />
            <span className="flex flex-row gap-7">
              <h2 className=" ">Customer Address :</h2>
              <p className=" text-[15px] font-light">{customer?.address}</p>
            </span>
            <SelectSeparator />
            <span className="flex flex-row gap-7">
              <h2 className=" ">Customer Phone :</h2>
              <p className=" text-[15px] font-light">{customer?.phone}</p>
            </span>
            <SelectSeparator />
            <span className="flex flex-row gap-7">
              <h2 className=" mr-10">Customer PostalCode :</h2>
              <p className=" text-[15px] font-light">{customer?.postalCode}</p>
            </span>
            <SelectSeparator />
          </div>

          <div className="flex gap-7 justify-end mx-5 py-3">
            <Button className=" h-7 py-4 px-4 bg-slate-300">
              <Link href={`/customers/${customer?.id}/edit`}>Update</Link>
            </Button>

            <DeleteCustomer params={params} />
          </div>
        </div>
      </Card>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import React from "react";
import EditCustomer from "./EditCustomer";

interface Props {
  params: { id: string };
}

export default async function page({ params }: Props) {
  const customer = await prisma.customer.findUnique({
    where: { id: parseInt(params.id) },
  });
  return (
    <Card className=" w-[80%] p-10  mx-auto mt-16">
      <EditCustomer customer={customer} />
    </Card>
  );
}

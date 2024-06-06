import { Card } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import React from "react";
import EditItem from "./EditItem";

interface Props {
  params: { id: string };
}

export default async function EditingPage({ params }: Props) {
  const product = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });
  return (
    <Card className=" w-[80%] p-10  mx-auto mt-16">
      <EditItem product={product} />
    </Card>
  );
}

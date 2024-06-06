import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import { Status } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import DeleteProduct from "./DeleteProduct";

interface Props {
  params: { id: string };
}

export default async function ProductDetail({ params }: Props) {
  const productData: {
    id: number;
    name: string;
    status: Status;
    price: number;
    totalSales: number;
    createdAt: Date;
    updatedAt: Date;
    image: string | null;
  } | null = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });
  return (
    <div className="m-5 grid grid-cols-[70%_25%] gap-6">
      <div className=" flex flex-col gap-8 ">
        <span>
          <h1 className=" text-[33px] font-semibold">
            {productData?.name} #{productData?.id}
          </h1>
          <div className=" flex gap-4">
            <Badge>{productData?.status}</Badge>
            <span>{productData?.createdAt.toDateString()}</span>
          </div>
        </span>
        <Card className="p-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            recusandae sed odio dolores? Quidem iste sapiente sit nobis! Aliquid
            itaque vitae vel sunt ipsum ea minima sapiente in quaerat explicabo.
          </p>
        </Card>
      </div>
      <div className=" flex flex-col gap-4 opacity-80 mt-5">
        <Card className=" text-[15px] font-medium bg-slate-900 hover:bg-slate-950 cursor-pointer rounded-sm px-3 py-1">
          <Link
            href={`/products/${productData?.id}/edit`}
            className="flex flex-row gap-2 items-center justify-center "
          >
            <Pencil2Icon className=" h-4 w-4" />
            Edit {productData?.name}
          </Link>
        </Card>
        <DeleteProduct params={params} />
      </div>
    </div>
  );
}

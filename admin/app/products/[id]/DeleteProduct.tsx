// "use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card } from "@/components/ui/card";
import { Status } from "@prisma/client";
import { Trash2Icon } from "lucide-react";
import React from "react";
import DelButton from "@/app/products/[id]/DelButton";
import { prisma } from "@/prisma/client";

export default async function DeleteProduct({
  params,
}: {
  params: { id: string };
}) {
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
    <Card className="justify-center flex bg-red-700 text-[15px] font-medium hover:bg-red-800 cursor-pointer  opacity-80 rounded-sm py-1 px-3">
      <AlertDialog>
        <AlertDialogTrigger
          className={`justify-center flex flex-row gap-2 items-center`}
        >
          <Trash2Icon className="h-4 w-4 " />
          <p>Delete {productData?.name}</p>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              product and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction color="red">
              <DelButton productData={productData} />
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}

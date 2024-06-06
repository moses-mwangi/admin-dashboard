import DelButton from "@/app/products/[id]/DelButton";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { prisma } from "@/prisma/client";
import React from "react";
import DeleteButton from "./DeleteButton";

interface Prop {
  params: { id: string };
}

export default async function DeleteCustomer({ params }: Prop) {
  const customer = await prisma.customer.findUnique({
    where: { id: parseInt(params.id) },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className=" h-7 py-4 px-4 bg-slate-300">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            customer and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <DeleteButton customer={customer} />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

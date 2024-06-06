import React from "react";
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
import { Trash2Icon } from "lucide-react";
import { prisma } from "@/prisma/client";
import DeleteOrderButton from "../DeleteOrderButton";

interface Props {
  params: { id: string };
}

export default async function DeleteOrder({ params }: Props) {
  const order = await prisma.orders.findUnique({
    where: { id: parseInt(params.id) },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={`justify-center flex flex-row gap-2 items-center`}
      >
        <Trash2Icon className="h-4 w-4 " />
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            order and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction color="red">
            {/* <DelButton order={order} /> */}
            <DeleteOrderButton order={order} />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

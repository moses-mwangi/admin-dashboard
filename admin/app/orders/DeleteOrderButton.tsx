"use client";

import { Condition, Type } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

interface Props {
  order: {
    id: number;
    date: Date;
    name: string;
    email: string;
    type: Type;
    status: Condition;
    amount: number;
    tel: string;
  } | null;
}

export default function DeleteOrderButton({ order }: Props) {
  const router = useRouter();

  const deletePro = async () => {
    try {
      await axios.delete("/api/orders/" + order?.id);
      router.push("/orders");
      router.refresh();
      toast.success(`You have succefully deleted ${order?.name}`);
    } catch (err: any) {
      toast.error("Request Failed", err);
      console.log(err);
    }
  };

  return <div onClick={deletePro}>Continue</div>;
}

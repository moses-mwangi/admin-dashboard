"use client";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { Status } from "@prisma/client";

interface Props {
  productData: {
    id: number;
    name: string;
    status: Status;
    price: number;
    totalSales: number;
    createdAt: Date;
    updatedAt: Date;
    image: string | null;
  } | null;
}

export default function DelButton({ productData }: Props) {
  const router = useRouter();

  const deletePro = async () => {
    try {
      await axios.delete("/api/products/" + productData?.id);
      router.push("/products");
      router.refresh();
      toast.success(`You have succefully deleted ${productData?.name}`);
    } catch (err: any) {
      toast.error("Request Failed", err);
      console.log(err);
    }
  };

  return <div onClick={deletePro}>Continue</div>;
}

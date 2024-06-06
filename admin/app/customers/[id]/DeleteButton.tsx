"use client";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

interface Props {
  customer: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
  } | null;
}

export default function DeleteButton({ customer }: Props) {
  const router = useRouter();
  const deletePro = async () => {
    try {
      await axios.delete("/api/customers/" + customer?.id);
      router.push("/customers");
      router.refresh();
      toast.success(`You have succefully deleted ${customer?.firstName}`);
      console.log("succed");
    } catch (err: any) {
      toast.error("Request Failed", err);
      console.log(err);
      console.log("failed");
    }
  };

  return <div onClick={deletePro}>Continue</div>;
}

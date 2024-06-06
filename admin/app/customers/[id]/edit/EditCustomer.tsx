"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import Spinner from "@/app/Componenets/Spinner";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { customerSchema } from "@/app/products/validationSchemas";

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

type ProductDataForm = z.infer<typeof customerSchema>;

export default function EditCustomer({ customer }: Props) {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<ProductDataForm>({
    resolver: zodResolver(customerSchema),
  });

  const onsubmit = handleSubmit(async (data) => {
    const { firstName, lastName, email, country } = data;
    try {
      await axios.patch("/api/customers/" + customer?.id, {
        firstName,
        lastName,
        email,
        country,
      });
      toast.success("You have succefuly edited");
      router.push("/customers");
      router.refresh();
    } catch (err) {
      console.log(err);
      toast.error("updating product failed");
    }
  });

  return (
    <form className="flex flex-col gap-7" onSubmit={onsubmit}>
      <span className=" flex flex-row items-center gap-1 opacity-80">
        <Label htmlFor="name" className=" text-[15px] mr-20">
          First Name
        </Label>
        <div className="flex flex-col gap-1 w-[70%]">
          <Input
            type="text"
            defaultValue={customer?.firstName}
            {...register("firstName")}
          />
          {errors && (
            <p className=" text-sm text-red-700">{errors.firstName?.message}</p>
          )}
        </div>
      </span>

      <span className=" flex flex-row items-center opacity-80">
        <Label htmlFor="status" className=" text-[15px] mr-[5rem]">
          Last Name
        </Label>
        <div className="flex flex-col gap-1 w-[70%]">
          <Input
            type="text"
            defaultValue={customer?.lastName}
            {...register("lastName")}
          />
          {errors && (
            <p className=" text-sm text-red-700">{errors.lastName?.message}</p>
          )}
        </div>
      </span>
      <span className=" flex flex-row gap-2 items-center opacity-80 ">
        <Label htmlFor="price" className=" text-[15px] mr-20">
          Customer Email
        </Label>

        <div className="flex flex-col gap-1 w-[70%]">
          <Input
            type="text"
            defaultValue={customer?.email}
            {...register("email")}
          />
          {errors && (
            <p className=" text-sm text-red-700">{errors.email?.message}</p>
          )}
        </div>
      </span>
      <span className=" flex flex-row gap-2 items-center opacity-80 ">
        <Label htmlFor="price" className=" text-[15px] mr-20">
          Customer Address
        </Label>
        <div className="flex flex-col gap-1 w-[70%]">
          <Input
            type="text"
            defaultValue={customer?.country}
            {...register("country")}
          />
          {errors && (
            <p className=" text-sm text-red-700">{errors.country?.message}</p>
          )}
        </div>
      </span>
      <Button className=" mt-5 opacity-95 font-semibold text-[15px]">
        {isSubmitting && isLoading ? <Spinner /> : "Update"}
      </Button>
    </form>
  );
}

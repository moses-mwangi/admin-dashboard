"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import React, { ChangeEvent } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Status } from "@prisma/client";
import { z } from "zod";
import Spinner from "@/app/Componenets/Spinner";
import { prisma } from "@/prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
import { error } from "console";
import { useRouter } from "next/navigation";
import { productSchema } from "../validationSchemas";

interface Props {
  product: {
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

type ProductDataForm = z.infer<typeof productSchema>;

export default function EditItem({ product }: Props) {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isLoading },
    watch,
    setValue,
  } = useForm<ProductDataForm>({
    resolver: zodResolver(productSchema),
  });

  const onsubmit = handleSubmit(async (data) => {
    const { name, status, price, totalSales } = data;
    const newProduct = {
      name,
      status,
      price: Number(price),
      totalSales: Number(totalSales),
    };
    try {
      await axios.post("/api/products/", newProduct);
      toast.success("You have succefuly added product");
      router.push("/products");
      router.refresh();
    } catch (err) {
      console.log({
        name,
        status,
        price: Number(price),
        totalSales: Number(totalSales),
      });
      console.log(err);
      toast.error("Adding product failed");
    }
  });

  return (
    <Card className=" w-[80%] p-10  mx-auto mt-16">
      <form className="flex flex-col gap-7" onSubmit={onsubmit}>
        <span className=" flex flex-row items-center gap-1 opacity-80">
          <Label htmlFor="name" className=" text-[15px] mr-20">
            Product Name
          </Label>
          <div className="flex flex-col gap-1 w-[70%]">
            <Input type="text" {...register("name")} />
            {errors && (
              <p className=" text-sm text-red-700">{errors.name?.message}</p>
            )}
          </div>
        </span>

        <span className=" flex flex-row items-center opacity-80">
          <Label htmlFor="status" className=" text-[15px] mr-[5rem]">
            Product Status
          </Label>
          <div className="flex flex-col gap-1 w-[70%]">
            <Input type="text" {...register("status")} />
            {errors && (
              <p className=" text-sm text-red-700">{errors.status?.message}</p>
            )}
          </div>
        </span>
        <span className=" flex flex-row gap-2 items-center opacity-80 ">
          <Label htmlFor="price" className=" text-[15px] mr-20">
            Product Price
          </Label>

          <div className="flex flex-col gap-1 w-[70%]">
            <Input id="price" type="number" {...register("price")} />
            {errors && (
              <p className=" text-sm text-red-700">{errors.price?.message}</p>
            )}
          </div>
        </span>
        <span className=" flex flex-row gap-2 items-center opacity-80 ">
          <Label htmlFor="price" className=" text-[15px] mr-20">
            Product Sales
          </Label>
          <div className="flex flex-col gap-1 w-[70%]">
            <Input
              id="totalSales"
              type="number"
              defaultValue={Number(product?.totalSales)}
              {...register("totalSales")}
            />
            {errors && (
              <p className=" text-sm text-red-700">
                {errors.totalSales?.message}
              </p>
            )}
          </div>
        </span>
        <Button className=" mt-5 opacity-95 font-semibold text-[15px]">
          {isSubmitting && isLoading ? <Spinner /> : "Add Products"}
        </Button>
      </form>
    </Card>
  );
}

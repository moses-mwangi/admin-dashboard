import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default async function Loading() {
  return (
    <div className="m-5 grid grid-cols-[70%_25%] gap-6">
      <div className="flex flex-col gap-8">
        <span>
          <h1 className=" text-[33px] font-semibold flex flex-row gap-2 mb-4">
            <Skeleton className=" h-5 w-[40%] " />
            <Skeleton className=" h-5 w-[40%]" />
          </h1>
          <div className="flex gap-1">
            <Skeleton className=" h-4 w-[15%]" />
            <Skeleton className=" h-4 w-[15%]" />
          </div>
        </span>
        <Card className="p-8 flex flex-col gap-3">
          <Skeleton className=" h-3 w-full m" />
          <Skeleton className=" h-3 w-full" />
          <Skeleton className=" h-3 w-full" />
          <Skeleton className=" h-3 w-full" />
          <Skeleton className=" h-3 w-full" />
        </Card>
      </div>
      <div className=" flex flex-col gap-4 opacity-80 mt-5">
        <Skeleton className=" h-6 w-full" />

        <Skeleton className=" h-6 w-full" />
      </div>
    </div>
  );
}

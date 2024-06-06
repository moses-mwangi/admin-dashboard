"use client";

import { Button } from "@/components/ui/button";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  currentPage: number;
  pageSize: number;
  itemCount: number;
}

export default function Pagination({
  currentPage,
  pageSize,
  itemCount,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return;

  function changePages(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  }

  return (
    <div className=" p-3 flex gap-2 items-center bg-slate-900">
      <p className=" text-[14px] font-normal">
        Page {currentPage} of {pageCount}
      </p>
      <Button
        className=" bg-slate-600  w-12 h-8"
        disabled={currentPage === 1}
        onClick={() => changePages(1)}
      >
        <DoubleArrowLeftIcon className="h-4 w-4" />
      </Button>
      <Button
        className=" bg-slate-600 w-12 h-8"
        disabled={currentPage === 1}
        onClick={() => changePages(currentPage - 1)}
      >
        <ChevronLeft className=" w-4 h-4" />
      </Button>
      <Button
        className=" bg-slate-600 w-12 h-8"
        disabled={pageCount === currentPage}
        onClick={() => changePages(currentPage + 1)}
      >
        <ChevronRight className=" w-4 h-4" />
      </Button>
      <Button
        className=" bg-slate-600 w-12 h-8"
        disabled={pageCount === currentPage}
        onClick={() => changePages(pageCount)}
      >
        <DoubleArrowRightIcon className=" w-4 h-4" />
      </Button>
    </div>
  );
}

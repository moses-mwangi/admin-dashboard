"use client";
import { Card } from "@/components/ui/card";
import { Status } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const statuses = [
  { label: "All" },
  { label: "Active", value: "Active" },
  { label: "Draft", value: "Draft" },
  { label: "Archived", value: "Archived" },
];

interface Props {
  searchedStatus: { Status: Status | "All" };
}

export default function FilterProducts({ searchedStatus }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const curPath = usePathname();

  function addStatus(Status: string | "") {
    const params = new URLSearchParams(searchParams);
    params.set("Status", Status.toString());

    // if (Status) params.append("Status", Status);
    // if (searchParams.get("SortBy"))
    //   params.append("SortBy", searchParams.get("SortBy")!);

    const query = params.size ? "?" + params.toString() : "";
    router.push(`${query}`);
    router.refresh();
  }

  return (
    <Card className=" rounded-[5px] items-center flex gap-2 ">
      {statuses.map((status) => (
        <div key={status.label} className="p-2 text-[14px] opacity-80  ">
          <span
            className={`cursor-pointer hover:bg-slate-800 py-[6px] px-[13px] rounded-sm ${
              searchedStatus.Status === status.label ? "bg-slate-800" : ""
            }`}
            onClick={() => addStatus(status.label)}
          >
            {status.label}
          </span>
        </div>
      ))}
    </Card>
  );
}

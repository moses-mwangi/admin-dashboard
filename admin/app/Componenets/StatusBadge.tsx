import { Status } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import React from "react";

const statusIssueMap: Record<
  Status,
  { label: string; color: "green" | "violet" | "red" }
> = {
  Active: { label: "Active", color: "green" },
  Draft: { label: "Draft", color: "violet" },
  Archived: { label: "Archived", color: "red" },
};

export default function IssueStatusBadge({ status }: { status: Status }) {
  return (
    <Badge color={statusIssueMap[status].color}>
      {statusIssueMap[status].label}
    </Badge>
  );
}

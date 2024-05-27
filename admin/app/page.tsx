import { ModeToggle } from "@/components/theme-toggle";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function page() {
  return (
    <Card className=" p-5">
      <ModeToggle />
      <Input placeholder="search..." />
      page
    </Card>
  );
}

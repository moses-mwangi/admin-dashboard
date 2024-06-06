import { prisma } from "@/prisma/client";
import { Award } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const data = await prisma.orders.findUnique({
    where: { id: parseInt(params.id) },
  });

  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const data = await prisma.orders.findUnique({
    where: { id: parseInt(params.id) },
  });

  await prisma.orders.delete({ where: { id: data?.id } });

  return NextResponse.json({});
}

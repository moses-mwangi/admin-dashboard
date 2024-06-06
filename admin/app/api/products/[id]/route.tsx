import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const data = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });

  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const data = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });

  const unique = await prisma.products.delete({ where: { id: data?.id } });

  return NextResponse.json({});
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const data = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });

  const unique = await prisma.products.update({
    where: { id: data?.id },
    data: {
      name: body.name,
      status: body.status,
      price: body.price,
      totalSales: body.totalSales,
    },
  });

  return NextResponse.json(data, { status: 200 });
}

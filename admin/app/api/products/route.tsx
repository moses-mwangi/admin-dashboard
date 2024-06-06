import {
  productPostSchema,
  productSchema,
} from "@/app/products/validationSchemas";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = await prisma.products.findMany();

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productPostSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
      status: body.status,
      totalSales: body.totalSales,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}

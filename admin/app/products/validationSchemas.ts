import { number, string, z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1).max(225),
  price: z.string().min(1, "Number must be non-negative").nullable(),
  totalSales: z.string().min(1, "Number must be non-negative").nullable(),
  status: z.string().min(1).max(225),
});

export const productPostSchema = z.object({
  name: z.string().min(1).max(225),
  price: z.number().min(1, "Number must be non-negative").nullable(),
  totalSales: z.number().min(1, "Number must be non-negative").nullable(),
  status: z.string().min(1).max(225),
});

export const customerSchema = z.object({
  firstName: z.string().min(1).max(225),
  lastName: z.string().min(1).max(225),
  email: z.string().min(1),
  country: z.string().min(1).max(225),
});

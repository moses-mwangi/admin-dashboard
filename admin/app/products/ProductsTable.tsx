import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Products } from "@prisma/client";
import IssueStatusBadge from "../Componenets/StatusBadge";
import Image from "next/image";
import { DotsVerticalIcon, Pencil2Icon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  products: Products[];
}

export default async function ProductsTable({ products }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Total Sales</TableHead>
          <TableHead>Created at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <Image
                src={product.image ? `${product.image}` : "/image.png"}
                alt="clothes"
                width={50}
                height={50}
              />
            </TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>
              <IssueStatusBadge status={product.status} />
            </TableCell>
            <TableCell>{`$${product.price}`}</TableCell>
            <TableCell>{product.totalSales}</TableCell>
            <TableCell>{product.createdAt.toDateString()}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 hover:bg-slate-800 rounded-sm">
                  <DotsVerticalIcon className=" h-4 w-4 flex items-center" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href={`/products/${product.id}`} className="flex">
                        <EyeIcon className=" h-5 w-5 mr-2 opacity-60" />
                        view Details
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Link
                        href={`/products/${product.id}/edit`}
                        className="flex"
                      >
                        <Pencil2Icon className=" h-5 w-5 mr-2 opacity-60" />
                        Update Product
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

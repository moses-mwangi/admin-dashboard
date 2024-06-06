"use client";
import {
  HomeIcon,
  LucideBox,
  LucideUsers2,
  LucideWarehouse,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { label: "Dashboard", icon: <HomeIcon />, ref: "/dashboard" },
  { label: "Products", icon: <LucideBox />, ref: "/products" },
  { label: "Orders", icon: <ShoppingCart />, ref: "/orders" },
  { label: "Customers", icon: <LucideUsers2 />, ref: "/customers" },
];

export default function SideBar() {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col gap-12 row-span-full p-10 border-r-[1px] border-r-slate-700 border-opacity-30 bg-opacity-40 bg-slate-800">
      <Link href="/">
        <Image
          src="/images/image.png"
          alt="restaurant"
          width={200}
          height={200}
        />
      </Link>

      <div className="flex flex-col gap-5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.ref}
            className={` py-2 px-4 rounded-sm flex flex-row gap-3 hover:bg-slate-950 duration-2000 hover:duration-300  ${
              link.ref === currentPath ? "bg-slate-950" : ""
            } `}
          >
            <span className=" opacity-50 ">{link.icon}</span>
            <span className=" text-[16px] font-normal">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

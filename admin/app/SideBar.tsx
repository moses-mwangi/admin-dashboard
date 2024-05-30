import { CaretDownIcon } from "@radix-ui/react-icons";
import { HomeIcon, ListOrderedIcon, ShoppingCart } from "lucide-react";
// import { HomeIcon } from "@radix-ui/react-icons";
import { Container } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  { label: "Dashboard", icon: <HomeIcon /> },
  { label: "Orders", icon: <ShoppingCart /> },
  { label: "Products", icon: <CaretDownIcon /> },
  { label: "Customers", icon: <HomeIcon /> },
];

export default function SideBar() {
  return (
    <div className=" flex flex-col gap-12 row-span-full p-7 border-r-[1px] border-r-slate-700 border-opacity-30 bg-opacity-40 bg-slate-800">
      <Link href="/">
        <Image
          src="/images/image.png"
          alt="restaurant"
          width={200}
          height={200}
        />
      </Link>

      <div className="flex flex-col gap-7">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.label}
            className="flex flex-row gap-4"
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

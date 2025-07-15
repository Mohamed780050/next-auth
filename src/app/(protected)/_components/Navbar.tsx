"use client";

import { Button } from "@/components/ui/button";
import { NavbarLinks } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserButton from "./UserButton";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-full max-w-[600px] shadow-sm">
      <ul>
        {NavbarLinks.map((item, index) => (
          <li key={index}>
            <Button
              asChild
              variant={pathname === item.href ? "default" : "outline"}
            >
              <Link href={item.href} className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
      <UserButton />
    </nav>
  );
}
export default Navbar;

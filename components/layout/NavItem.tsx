"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({
  href,
  label,
}: NavItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  const newButton = () => {
    console.log("Testing")
  }

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors",
        active
          ? "bg-[#2B64F1] text-white"
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      {label}
    </Link>
  );
}

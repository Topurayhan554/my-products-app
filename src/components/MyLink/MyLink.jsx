"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MyLink({ href, className = "", children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg transition 
        ${isActive ? "bg-blue-400 text-white font-bold" : "font-semibold"} 
        ${className}
      `}
    >
      {children}
    </Link>
  );
}

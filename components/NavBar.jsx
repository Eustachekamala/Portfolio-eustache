"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "portfolio",
    path: "/portfolio",
  },
  {
    name: "works",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        return (
          <Link key={link.name} className={`${link.path === pathname && "text-accent-500 border-b-2 border-accent-600"}
          capitalize font-medium hover:text-accent-600 hover:transition-all hover:duration-500`} href={link.path}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;

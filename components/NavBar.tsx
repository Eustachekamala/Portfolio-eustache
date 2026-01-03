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

  return (
    <nav className="flex gap-4 md:gap-8 items-center">
      {links.map((link) => {
        const isActive = link.path === pathname;
        return (
          <Link
            key={link.name}
            className={`capitalize font-medium text-sm md:text-base transition-colors duration-200 ${isActive ? 'text-accent-500 after:block after:h-0.5 after:bg-accent-600 after:mt-1' : 'text-white/80 hover:text-accent-500'}`}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;

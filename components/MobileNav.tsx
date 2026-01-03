"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; 
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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent-500 cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/** Add a visually hidden SheetTitle for accessibility */}
         <VisuallyHidden asChild>
            <SheetTitle>Mobile Navigation</SheetTitle>
        </VisuallyHidden>
        {/** Logo */}
        <div className="mt-20 mb-16 text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Eustache<span className="text-accent-500">.</span>
            </h1>
          </Link>
        </div>

        {/** Nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${link.path === pathname && "text-accent-500 border-b-2 border-accent-600"}
          capitalize font-medium hover:text-accent-600 transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
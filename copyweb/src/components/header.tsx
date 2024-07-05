"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Icons } from "./ui/icons";

export default function Header() {
  console.time("header");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  //fixed top-0 w-full overflow-auto bg-white text-white bg-opacity-100
  return (
    <header
      // className={bg_color}
      className={cn(
        "fixed top-0 z-10 w-full overflow-auto bg-white text-white",
        isScrolled ? "animate-fade-in bg-opacity-50 text-black" : "bg-opacity-0",
      )}
    >
      <div className="font-TrebuchetMSRegular flex h-28 flex-col overflow-hidden">
        <section>
          <div className="mx-20 my-2 flex justify-end gap-3 text-[11px]">
            <div>ACCESS</div>

            <div className="flex flex-row items-center gap-1">
              <Icons target="envelope" size="12"></Icons>
              <div>CONTACT</div>
            </div>
            <div className="pr-10"></div>
          </div>
        </section>
        <section className="flex">
          <div className="mx-28"></div>
          <div className="px-20">
            <Icons target="craft" size="32"></Icons>
          </div>
          <div className="grid grid-cols-3 content-end gap-3 text-[14px]">
            <a className="ml-3" href="https://google.com">
              NEWS
            </a>
            <a href="https://google.com">COMPANY</a>
            <a href="https://google.com">RECRUIT</a>
          </div>
        </section>
      </div>
    </header>
  );
}

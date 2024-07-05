"use client";

import { useEffect, useState } from "react";
import { Ghost } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

export function PageTopBtn() {
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

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="fixed bottom-20 right-10 z-10">
      <Button
        onClick={scrollTop}
        className={cn("relative h-[28px] w-[120px] bg-gray-600 text-sm hover:bg-gray-300", isScrolled ? "block" : "hidden")}
      >
        <a className="absolute left-8 top-1">PAGE TOP</a>
      </Button>
    </div>
  );
}

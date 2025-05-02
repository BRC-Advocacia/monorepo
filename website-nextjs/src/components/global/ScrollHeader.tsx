"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 bg-(--azul-escuro)/50 z-50 transition-transform container-x py-6 flex justify-between items-center shadow-sm duration-300 max-h-[80px]",
        isVisible ? "translate-y-0" : "-translate-y-full",
        lastScrollY < 10 && "bg-(--azul-escuro)/0 shadow-none transition"
      )}
    >
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
}

"use client";
import Link from "next/link";
import React from "react";
import useMedia from "@/hooks/useMedia";
import HeaderNavMobile from "./HeaderNavMobile";

enum ePaths {
  contato = "/contato",
  nossoTime = "/nosso-time",
}

const HeaderNav = () => {
  const mobile = useMedia("(width <= 840px)");
  if (!mobile)
    return (
      <nav className="poppins">
        <ul className="flex gap-2 items-center uppercase cor-p2">
          <Link
            href={ePaths.contato}
            className={`rounded-2xl group px-2 hover:text-(--cor-p1)`}
          >
            <li className="text-[.875rem]">Contato</li>
          </Link>
          <Link
            href={ePaths.nossoTime}
            className={`rounded-2xl group px-2 hover:text-(--cor-p1)`}
          >
            <li className="text-[.875rem]">Nosso Time</li>
          </Link>
        </ul>
      </nav>
    );
  return <HeaderNavMobile />;
};

export default HeaderNav;

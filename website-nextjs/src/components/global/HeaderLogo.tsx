"use client";
import React from "react";
import useMedia from "@/hooks/useMedia";
import Image from "next/image";

const HeaderLogo = () => {
  const mobile = useMedia("(width <= 800px)");
  return (
    <>
      {mobile ? (
        <Image
          priority
          src={"/img/logos/logo-branca-sem-nome.png"}
          width={40}
          height={40}
          style={{ width: "auto", height: "auto" }}
          className="h-full w-[40px]"
          alt="BRC logo"
        />
      ) : (
        <Image
          priority
          src={"/img/logos/logo-branca.png"}
          width={100}
          height={54}
          style={{ width: "auto", height: "auto" }}
          alt="BRC Logo completa"
        />
      )}
    </>
  );
};

export default HeaderLogo;

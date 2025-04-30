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
          className="w-[40px]"
          width={40}
          height={40}
          alt="BRC logo"
          style={{ width: "auto", height: "auto" }}
        />
      ) : (
        <Image
          priority
          src={"/img/logos/logo-branca.png"}
          width={130}
          height={54}
          alt="BRC Logo completa"
          style={{ width: "auto", height: "auto" }}
        />
      )}
    </>
  );
};

export default HeaderLogo;

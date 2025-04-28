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
          height={50}
          alt="BRC logo"
          sizes="15vw"
        />
      ) : (
        <Image
          priority
          src={"/img/logos/logo-branca.png"}
          width={130}
          height={60}
          alt="BRC Logo completa"
          sizes="15vw"
        />
      )}
    </>
  );
};

export default HeaderLogo;

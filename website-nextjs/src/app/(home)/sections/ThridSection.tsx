import { AreaCarousel } from "@/components/home/CardCarousel";
import Image from "next/image";
import React from "react";

const ThridSection = () => {
  return (
    <section className="relative h-auto">
      <Image
        priority
        alt="Imagem de background para a seção de introdução da página."
        src={"/img/home/atuacao-bg.jpeg"}
        width={1200}
        height={1200}
        className="w-screen h-full blur-[4px] object-cover object-top absolute top-0 z-[-10]"
        sizes="100vh"
      />
      <div className="absolute top-0 h-full left-0 right-0 bg-slate-800/90 z-[-9]" />
      <div className="py-[4rem] w-full h-full px-5 md:px-10 flex flex-col top-0">
        <div className="mb-10 lg:mb-15">
          <p className="fadeInDown font-1-m cor-4 text-center sm:text-start">
            PLANO ESTRATÉGICO E ESPECIALIZADO
          </p>
          <h2 className="cor-0 font-3-xxl text-center sm:text-start">
            áreas de atuação<span className="cor-p5">.</span>
          </h2>
        </div>
        <AreaCarousel />
      </div>
    </section>
  );
};

export default ThridSection;

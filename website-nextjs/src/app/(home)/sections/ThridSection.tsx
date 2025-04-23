import CardAreas from "@/components/home/CardAreas";
import Image from "next/image";
import React from "react";

const ThridSection = () => {
  return (
    <section>
      <div className="relative">
        <Image
          priority
          alt="Imagem de background para a seção de introdução da página."
          src={"/img/home/atuacao-bg.jpeg"}
          width={1800}
          height={1800}
          className="w-screen h-[150vh] blur object-cover object-top absolute top-0 z-[-10]"
          sizes="150vh"
        />
        <div className="absolute top-0 h-[150vh] left-0 right-0 bg-slate-800/90 z-[-9]" />
      </div>
      <div className="py-[4rem] px-5 md:px-10">
        <div className="mb-5 lg:mb-10">
          <p className="fadeInDown font-1-m cor-4 container">
            PLANO ESTRATÉGICO E ESPECIALIZADO
          </p>
          <h2 className="cor-0 font-3-xxl container">
            áreas de atuação<span className="cor-p5">.</span>
          </h2>
        </div>
        <div>
          <CardAreas />
        </div>
      </div>
    </section>
  );
};

export default ThridSection;

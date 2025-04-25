import PartnersCarousel from "@/components/home/PartnersCarousel";
import React from "react";

const FourthSection = () => {
  return (
    <section className="flex flex-col gap-6 px-5 py-[4rem] md:px-10 relative max-h-auto lg:max-h-screen mb-12">
      <div>
        <p className="fadeInDown font-1-m cor-6 text-center sm:text-start">
          RESPONSABILIDADE E TRANSPARÊNCIA
        </p>
        <h2 className="cor-azul-escuro font-3-xxl text-center sm:text-start">
          nosso time<span className="cor-p5">.</span>
        </h2>
      </div>
      <PartnersCarousel />
    </section>
  );
};

export default FourthSection;

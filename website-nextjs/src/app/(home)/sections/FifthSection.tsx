import OfficeCarousel from "@/components/home/OfficeCarousel";
import Image from "next/image";
import React from "react";

const FifthSection = () => {
  return (
    <section className="flex flex-col gap-6 px-5 py-[4rem] md:px-10 max-h-auto relative h-auto">
      <Image
        src={"/img/home/office-pic.jpg"}
        alt="Imagem de fundo da seção 'nossos escritórios' do site BRC."
        width={1200}
        height={1200}
        className="absolute h-full blur-[4px] w-screen top-0 left-0 object-cover -z-14"
      />
      <div className="absolute top-0 h-full left-0 right-0 bg-slate-800/90 -z-10" />
      <Image
        src={"/img/logos/logo-branca-sem-nome.png"}
        alt="Logo branca BRC."
        className="absolute -z-9 bottom-5 left-[40px] opacity-15 lg:opacity-20"
        width={130}
        height={60}
      />
      <div>
        <p className="fadeInDown font-1-m cor-4 text-center sm:text-start">
          ATENDIMENTO EM TODO O BRASIL
        </p>
        <h2 className="cor-0 font-3-xxl text-center sm:text-start">
          nossos escritórios<span className="cor-p5">.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 items-start">
        <div>
          <OfficeCarousel />
        </div>
        <div className="grid gap-6">
          <h3 className="cor-background font-1-xl">
            Serviço jurídico exemplar presencialmente na Paraíba em Campina
            Grande e Esperança<span className="cor-p2">.</span>
          </h3>
          <p className="font-1-s cor-4">
            Descubra nossos escritórios em Campina Grande e Esperança, onde a
            excelência jurídica se encontra com o atendimento personalizado.
            Estamos aqui para servir e oferecer soluções eficazes para suas
            necessidades legais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;

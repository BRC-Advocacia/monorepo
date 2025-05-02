"use client";
import React from "react";
import PartnerCard, { PartnerProps } from "./PartnerCard";
import useMedia from "@/hooks/useMedia";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import PartnerCardMobile from "./PartnerCardMobile";

export const partners: PartnerProps[] = [
  {
    name: "Francian Batista",
    image: "/img/socios/batista-none.png",
    linkedinUrl: "https://www.linkedin.com/in/francian-batista-7541411aa/",
    specialties: ["Empresarial", "Tributário", "Societário"],
    highlight: "🌟 Coordenador de Comissões OAB/CG",
    href: "/nosso-time/#batista",
  },
  {
    name: "Felipe Ramos",
    image: "/img/socios/ramos-none.png",
    linkedinUrl: "https://www.linkedin.com/in/felipebramos/",
    specialties: ["Cível", "Família", "Imobiliário"],
    highlight: "🌟 Ouvidor Geral OAB/CG",
    href: "/nosso-time/#ramos",
  },
  {
    name: "Thiago Câmara",
    image: "/img/socios/camara-none.png",
    linkedinUrl: "https://www.instagram.com/advthiagocamara/",
    specialties: ["Consumidor", "Trabalhista"],
    highlight: "🌟 Procurador do PROCON de Esperança",
    href: "/nosso-time/#camara",
  },
];

const PartnersCarousel = () => {
  const isMobile = useMedia("(width<=1024px)");
  return (
    <>
      {isMobile ? (
        <Carousel className="w-full">
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="w-full">
                <PartnerCardMobile partner={partner} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center sm:justify-end gap-2 absolute px-2 bottom-0 right-6 z-100">
            <CarouselPrevious className="static transform-none h-12 w-12 cursor-pointer disabled:cursor-auto bg-(--azul-escuro) hover:bg-(--azul-escuro)/90 hover:text-(--cor-p2) text-(--cor-p1) border-(--cor-p1)" />
            <CarouselNext className="static transform-none h-12 w-12 cursor-pointer disabled:cursor-auto bg-(--azul-escuro) hover:bg-(--azul-escuro)/90 hover:text-(--cor-p2) text-(--cor-p1) border-(--cor-p1)" />
          </div>
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      )}
    </>
  );
};

export default PartnersCarousel;

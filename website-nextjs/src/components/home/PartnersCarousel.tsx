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

const partners: PartnerProps[] = [
  {
    name: "Francian Batista",
    image: "/img/socios/batista-none.png",
    linkedinUrl: "https://www.linkedin.com/in/francian-batista-7541411aa/",
    specialties: ["Empresarial", "Tributário", "Societário"],
    highlight: "🌟 Coordenador de Comissões OAB/CG",
  },
  {
    name: "Felipe Ramos",
    image: "/img/socios/ramos-none.png",
    linkedinUrl: "https://www.linkedin.com/in/felipebramos/",
    specialties: ["Cível", "Família", "Imobiliário"],
    highlight: "🌟 Ouvidor Geral OAB/CG",
  },
  {
    name: "Thiago Câmara",
    image: "/img/socios/camara-none.png",
    linkedinUrl: "https://www.instagram.com/advthiagocamara/",
    specialties: ["Consumidor", "Trabalhista"],
    highlight: "🌟 Procurador do PROCON de Esperança",
  },
];

const PartnersCarousel = () => {
  const isMobile = useMedia("(width<=1024px)");
  return (
    <>
      {isMobile ? (
        // Mobile: Carousel
        <Carousel className="w-full">
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="w-full">
                <PartnerCardMobile partner={partner} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="static transform-none h-10 w-10 sm:h-10 sm:w-10 cursor-pointer disabled:cursor-auto" />
            <CarouselNext className="static transform-none h-10 w-10 sm:h-10 sm:w-10 cursor-pointer disabled:cursor-auto" />
          </div>
        </Carousel>
      ) : (
        // Desktop: Grid
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

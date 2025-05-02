"use client";
import React from "react";
import PartnerCard from "./PartnerCard";
import useMedia from "@/hooks/useMedia";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import PartnerCardMobile from "./PartnerCardMobile";
import { partners } from "@/data/Partners";

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

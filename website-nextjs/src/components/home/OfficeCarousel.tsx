import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const officePicturesSrc = [
  "/img/fotos-escritorio/foto1.jpeg",
  "/img/fotos-escritorio/foto2.jpeg",
  "/img/fotos-escritorio/foto3.jpeg",
  "/img/fotos-escritorio/foto4.jpeg",
];

const OfficeCarousel = () => {
  return (
    <Carousel
      className="mx-auto lg:mx-0 w-full lg:w-[90%]  relative rounded-2xl mb-8 md:mb-16 lg:mb-0"
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
    >
      <CarouselContent className="rounded-2xl h-[80%]">
        {officePicturesSrc.map((src, index) => (
          <CarouselItem
            key={index}
            className={`h-full rounded-2xl overflow-hidden p-2 pl-4`}
          >
            <Image
              className="flex items-center justify-center w-full rounded-2xl h-[500px] lg:h-[500px] object-cover"
              src={src}
              alt="Foto do escritório BRC"
              width={600}
              height={600}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center sm:justify-end gap-2 absolute px-2 bottom-0 right-6 z-100">
        <CarouselPrevious className="static transform-none h-12 w-12 cursor-pointer disabled:cursor-auto bg-(--azul-escuro) hover:bg-(--azul-escuro)/90 hover:text-(--cor-p2) text-(--cor-p1) border-(--cor-p1)" />
        <CarouselNext className="static transform-none h-12 w-12 cursor-pointer disabled:cursor-auto bg-(--azul-escuro) hover:bg-(--azul-escuro)/90 hover:text-(--cor-p2) text-(--cor-p1) border-(--cor-p1)" />
      </div>
    </Carousel>
  );
};

export default OfficeCarousel;

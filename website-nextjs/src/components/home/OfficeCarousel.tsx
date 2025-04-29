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
      className="mx-auto lg:mx-0 w-full lg:w-[90%] h-full relative rounded-2xl"
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
    >
      <CarouselContent className="rounded-2xl">
        {officePicturesSrc.map((src, index) => (
          <CarouselItem
            key={index}
            className={`basis-full rounded-2xl overflow-hidden p-2 pl-4`}
          >
            <Image
              className="flex aspect-square items-center justify-center w-full rounded-2xl h-[80%] object-cover"
              src={src}
              alt="Foto do escritório BRC"
              width={600}
              height={600}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center sm:justify-end gap-2 absolute px-2 bottom-[20%] right-6">
        <CarouselPrevious className="static transform-none h-8 w-8 sm:h-10 sm:w-10 cursor-pointer disabled:cursor-auto bg-(--azul-escuro)/60 hover:bg-(--azul-escuro)/90 hover:text-(--cor-p2) text-(--cor-p1)" />
        <CarouselNext className="static transform-none h-8 w-8 sm:h-10 sm:w-10 cursor-pointer disabled:cursor-auto bg-(--azul-escuro)/60 hover:bg-(--azul-escuro)/90 hover:text-(--cor-p2) text-(--cor-p1)" />
      </div>
    </Carousel>
  );
};

export default OfficeCarousel;

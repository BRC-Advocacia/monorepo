import type React from "react";
import { Briefcase, Landmark, Scale } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardArea from "./CardAreas";

export type AreaProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const areasAtuacao: AreaProps[] = [
  {
    title: "Trabalhista",
    icon: <Briefcase width={18} height={18} className="cor-12 opacity-70" />,
    description:
      "Promovemos equilíbrio nas relações de trabalho, com soluções legais e extrajudiciais para garantir justiça e harmonia.",
  },
  {
    title: "Previdenciário",
    icon: <Scale width={18} height={18} className="cor-12 opacity-70" />,
    description:
      "Assessoria e consultoria jurídica previdenciária, para fornecer a completa orientação, além de acompanhar os pedidos relativos à seguridade social.",
  },
  {
    title: "Civil",
    icon: <Scale width={18} height={18} className="cor-12 opacity-70" />,
    description:
      "Atuação especializada nas diversas relações e negócios jurídicos do direito civil, de modo consultivo, preventivo, contencioso e financeiro.",
  },
  {
    title: "Bancário",
    icon: <Landmark width={18} height={18} className="cor-12 opacity-70" />,
    description:
      "Atuação especializada com experiência em tramitações de revisionais e cobranças com recuperação de créditos e financiamentos.",
  },
];

export function AreaCarousel() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          breakpoints: {
            "(min-width: 640px)": { slidesToScroll: 2 },
            "(min-width: 1024px)": { slidesToScroll: 3 },
          },
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 flex">
          {areasAtuacao &&
            areasAtuacao.map((area, i) => (
              <CarouselItem
                key={i}
                className={`pl-4 basis-full sm:basis-1/2 lg:basis-1/3`}
              >
                <CardArea area={area} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="flex justify-center sm:justify-end gap-2 mt-6">
          <CarouselPrevious className="static transform-none h-8 w-8 sm:h-10 sm:w-10 cursor-pointer disabled:cursor-auto" />
          <CarouselNext className="static transform-none h-8 w-8 sm:h-10 sm:w-10 cursor-pointer disabled:cursor-auto" />
        </div>
      </Carousel>
    </div>
  );
}

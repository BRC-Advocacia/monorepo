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

export function AreaCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 3,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {areasAtuacao &&
            areasAtuacao.map((area, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/3">
                <CardArea area={area} />
                {/* <Card className="max-w-[400px] h-full flex flex-col p-6 gap-0">
                  <CardTitle className="pb-2 border-b border-b-zinc-600/20">
                    <p className="cor-7 ml-[2px] roboto font-[300]">direito</p>
                    <div className="grid grid-cols-[1fr_auto] items-center">
                      <h2 className="cor-10 poppins font-[400] text-2xl">
                        {area.title}
                      </h2>
                      {area.icon}
                    </div>
                  </CardTitle>
                  <CardContent className="grow px-1 py-4 cor-9 flex flex-col justify-between gap-4 mt-0">
                    <p>{area.description}</p>
                    <Button className="flex items-center text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300 cursor-pointer">
                      <p>Conheça</p>
                      <MoveRight width={12} height={12} className="mt-1 ml-2" />
                    </Button>
                  </CardContent>
                </Card> */}
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-6">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </div>
  );
}

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

import type React from "react";
import {
  BriefcaseBusiness,
  Building2,
  Handshake,
  Landmark,
  Scale,
  Tag,
} from "lucide-react";
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

// Imobiliário, Empresarial, Societário, Trabalhista e Tributário.

const areasAtuacao: AreaProps[] = [
  {
    title: "Imobiliário",
    icon: (
      <Building2
        width={18}
        height={18}
        className="cor-azul-escuro opacity-70"
      />
    ),
    description:
      "Especializados em Direito Imobiliário, oferecemos assessoria completa para compra, venda, locação e regularização de imóveis, garantindo segurança jurídica e soluções personalizadas.",
  },
  {
    title: "Empresarial",
    icon: (
      <Building2
        width={18}
        height={18}
        className="cor-azul-escuro opacity-70"
      />
    ),
    description:
      "Advocacia especializada para atender com excelência a sua empresa atuando desde o planejamento societário até consultoria empresarial.",
  },
  {
    title: "Societário",
    icon: (
      <Handshake
        width={18}
        height={18}
        className="cor-azul-escuro opacity-70"
      />
    ),
    description:
      "Atuamos em Direito Societário com expertise na constituição, reestruturação e dissolução de empresas, oferecendo soluções estratégicas para fusões, aquisições e governança corporativa.",
  },
  {
    title: "Trabalhista",
    icon: (
      <BriefcaseBusiness
        width={18}
        height={18}
        className="cor-azul-escuro opacity-70"
      />
    ),
    description:
      "Promovemos equilíbrio nas relações de trabalho, com soluções legais e extrajudiciais para garantir justiça e harmonia.",
  },
  {
    title: "Tributário",
    icon: (
      <Landmark width={18} height={18} className="cor-azul-escuro opacity-70" />
    ),
    description:
      "Equipe especializada em direito tributário oferece soluções eficientes, estratégias inteligentes e tranquilidade para clientes em questões fiscais complexas.",
  },
  {
    title: "Civil",
    icon: (
      <Scale width={18} height={18} className="cor-azul-escuro opacity-70" />
    ),
    description:
      "Atuação especializada nas diversas relações e negócios jurídicos do direito civil, de modo consultivo, preventivo, contencioso e financeiro.",
  },
  {
    title: "Bancário",
    icon: (
      <Landmark width={18} height={18} className="cor-azul-escuro opacity-70" />
    ),
    description:
      "Atuação especializada com experiência em tramitações de revisionais e cobranças com recuperação de créditos e financiamentos.",
  },
  {
    title: "Consumidor",
    icon: (
      <Landmark width={18} height={18} className="cor-azul-escuro opacity-70" />
    ),
    description:
      "Proporcionamos assistência abrangente em garantias, contratos e controvérsias, assegurando a proteção dos direitos dos consumidores e resoluções justas.",
  },
  {
    title: "Família",
    icon: (
      <Scale width={18} height={18} className="cor-azul-escuro opacity-70" />
    ),
    description:
      "Conte com advogados qualificados para proteger seu legado, nossa missão em direito de família e sucessões, divórcio.",
  },
  {
    title: "Marcário",
    icon: <Tag width={18} height={18} className="cor-azul-escuro opacity-70" />,
    description:
      "Registre sua marca de forma rápida, fácil e segura. Solicite um orçamento agora mesmo com nossa equipe.",
  },
];

export function AreaCarousel() {
  return (
    <div className="w-full mx-auto ">
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
        <div className="flex justify-end mr-8 sm:justify-end gap-2 mt-8">
          <CarouselPrevious className="static transform-none h-12 w-12 cursor-pointer disabled:cursor-auto bg-(--azul-escuro) hover:bg-(--azul-escuro)/90 hover:text-(--cor-p2) text-(--cor-p1) border-(--cor-p1)" />
          <CarouselNext className="static transform-none h-12 w-12 cursor-pointer disabled:cursor-auto bg-(--azul-escuro) hover:bg-(--azul-escuro)/90 hover:text-(--cor-p2) text-(--cor-p1) border-(--cor-p1)" />
        </div>
      </Carousel>
    </div>
  );
}

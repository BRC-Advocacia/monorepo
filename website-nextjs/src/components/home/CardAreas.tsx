import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Briefcase, Landmark, MoveRight, Scale } from "lucide-react";
import { Button } from "../ui/button";

const CardAreas = () => {
  return (
    <section className="grid grid-cols-4 gap-4 flex-wrap">
      {areasAtuacao &&
        areasAtuacao.map((area, i) => (
          <Card className="max-w-[400px] flex flex-col p-6 gap-0" key={i}>
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
                <MoveRight width={12} height={12} className="mt-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
    </section>
  );
};

export default CardAreas;

const areasAtuacao = [
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

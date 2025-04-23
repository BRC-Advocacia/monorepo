import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Briefcase, MoveRight } from "lucide-react";
import { Button } from "../ui/button";

const CardAreas = () => {
  return (
    <Card className="max-w-[400px] p-6 gap-0">
      <CardTitle className="pb-2 border-b border-b-zinc-600/20">
        <p className="cor-7 ml-[2px] roboto font-[300]">direito</p>
        <div className="grid grid-cols-[1fr_auto] items-center">
          <h2 className="cor-10 poppins font-[400] text-2xl">Trabalhista</h2>
          <Briefcase width={18} height={18} className="cor-12 opacity-70" />
        </div>
      </CardTitle>
      <CardContent className="px-1 py-4 cor-9 grid gap-4 mt-0">
        <p>
          Promovemos equilíbrio nas relações de trabalho, com soluções legais e
          extrajudiciais para garantir justiça e harmonia.
        </p>
        <Button className="flex items-center text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300 cursor-pointer">
          <p>Conheça</p>
          <MoveRight width={12} height={12} className="mt-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardAreas;

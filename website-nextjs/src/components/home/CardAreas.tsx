import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { AreaProps } from "./CardCarousel";
import { MoveRight } from "lucide-react";

const CardArea = ({ area }: { area: AreaProps }) => {
  return (
    <>
      {area && (
        <Card className="w-full h-full flex flex-col px-6 py-8 sm:p-6 gap-0 rounded-lg">
          <CardTitle className="pb-2 border-b border-b-zinc-600/20">
            <p className="cor-7 poppins font-[400]">direito</p>
            <div className="grid grid-cols-[1fr_auto] items-center">
              <h2 className="cor-10 poppins font-[600] text-2xl">
                {area.title}
              </h2>
              {area.icon}
            </div>
          </CardTitle>
          <CardContent className="grow px-1 py-4 cor-9 flex flex-col justify-between gap-4 mt-0">
            <p>{area.description}</p>
            <Button className="flex items-center text-(--cor-p5) bg-(--azul-escuro) hover:bg-(--azul-escuro) hover:text-(--cor-p1) cursor-pointer rounded-md">
              <p>Conheça</p>
              <MoveRight width={12} height={12} className="mt-1" />
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default CardArea;

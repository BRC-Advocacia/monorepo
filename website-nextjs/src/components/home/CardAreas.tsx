import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { AreaProps } from "./CardCarousel";
import { MoveRight } from "lucide-react";

const CardArea = ({ area }: { area: AreaProps }) => {
  return (
    <>
      {area && (
        <Card className="max-w-[400px] h-full flex flex-col p-6 gap-0">
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
      )}
    </>
  );
};

export default CardArea;

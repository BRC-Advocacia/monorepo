import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { BadgePlus, AlignJustify, Files, Fingerprint, X } from "lucide-react";
import Link from "next/link";

const HeaderNavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="bg-transparent cor-2 p-2 rounded cursor-pointer hover:bg-transparent shadow-none border-none"
      >
        <Button variant={"default"}>
          <AlignJustify />
        </Button>
      </SheetTrigger>

      <SheetContent className="font-(family-name:--font-poppins) border-l-slate-600 z-999">
        <SheetHeader>
          <SheetTitle className="text-2xl cor-azul-escuro">
            Navegue pela plataforma!
          </SheetTitle>
          <SheetDescription className="text-[.875rem]">
            Aqui você pode navegar para todas as seções do site através de seu
            celular!
          </SheetDescription>
        </SheetHeader>
        <nav className="px-4">
          <ul className="cor-azul-escuro text-[.875rem] flex flex-col gap-3">
            <Link
              href={"/viagens"}
              className="border border-transparent border-b-slate-300/50 py-3"
            >
              <li className="flex gap-3 items-center w-[80%] justify-start">
                <BadgePlus />
                Viagens
              </li>
            </Link>
            <Link
              href={"/caronas"}
              className="border border-transparent border-b-slate-300/50 py-3"
            >
              <li className="flex gap-3 items-center w-[80%] justify-start">
                <Files />
                Caronas
              </li>
            </Link>
            <Link
              href={"/perfil"}
              className="border border-transparent border-b-slate-300/50 py-3"
            >
              <li className="flex gap-3 items-center w-[80%] justify-start">
                <Fingerprint />
                Perfil
              </li>
            </Link>
          </ul>
        </nav>

        <SheetFooter>
          <SheetClose
            asChild
            className="w-fit mx-auto rounded-[50%] bg-slate-800"
          >
            <Button className="cursor-pointer">
              <X className="cor-azul-escuro" />
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderNavMobile;

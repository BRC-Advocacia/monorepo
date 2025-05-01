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
import Image from "next/image";

const HeaderNavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="bg-transparent p-2 rounded cursor-pointer hover:bg-transparent shadow-none border-none"
      >
        <button>
          <AlignJustify className="text-(--cor-p2)" width={24} height={24} />
        </button>
      </SheetTrigger>

      <SheetContent className="poppins border-l-(--azul-escuro)/50 z-999 bg-(--azul-escuro) py-5">
        <Image
          src={"/img/logos/logo-branca-sem-nome.png"}
          alt="Logo branca BRC."
          className="mx-auto opacity-15 lg:opacity-20 absolute top-[40%] bottom-[40%] right-0 left-0"
          width={320}
          height={320}
          style={{ height: "auto", width: "auto" }}
        />
        <SheetHeader>
          <SheetDescription className="text-[.875rem] cor-background">
            Aqui você pode navegar para todas as seções do site através de seu
            celular!
          </SheetDescription>
          <SheetTitle className="text-2xl text-(--cor-p1)">
            Batista, Ramos e Câmara Advogados.
          </SheetTitle>
        </SheetHeader>
        <nav className="px-4">
          <ul className="cor-background text-[.875rem] flex flex-col gap-3">
            <Link
              href={"/contato"}
              className="border border-transparent border-b-(--cor-p1)/50 py-3"
            >
              <li className="flex gap-3 items-center w-[80%] justify-start">
                <BadgePlus />
                Contato
              </li>
            </Link>
            <Link
              href={"/areas-de-atuacao"}
              className="border border-transparent border-b-(--cor-p1)/50 py-3"
            >
              <li className="flex gap-3 items-center w-[80%] justify-start">
                <Files />
                Areas de Atuação
              </li>
            </Link>
            <Link
              href={"/nosso-time"}
              className="border border-transparent border-b-(--cor-p1)/50 py-3"
            >
              <li className="flex gap-3 items-center w-[80%] justify-start">
                <Fingerprint />
                Nosso Time
              </li>
            </Link>
          </ul>
        </nav>

        <SheetFooter className="flex flex-col gap-6">
          <SheetClose
            asChild
            className="mx-auto rounded-full bg-(--background) hover:bg-(--cor-p2) duration-300 text-(--azul-escuro)"
          >
            <Button className="cursor-pointer">
              <X />
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderNavMobile;

import GlowingListItem from "@/components/quem-somos/GlowingListItem";
import { cn } from "@/lib/utils";
import { CalendarCheck2, Radar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FourthSection = () => {
  return (
    <section
      className={cn(
        "px-5 md:px-10 py-[4rem] cor-0 text-center sm:text-start",
        "bg-gradient-to-b from-(--azul-escuro)/100 to-(--cor-11)/100"
      )}
    >
      <div className="mb-12">
        <p className="font-1-m cor-6 text-center sm:text-start ml-0 sm:ml-1">
          ADVOGADOS COMPROMETIDOS
        </p>
        <h1 className="font-3-xxl text-center sm:text-start mb-6">
          princípios norteadores<span className="cor-p5">.</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between">
          <div>
            <blockquote className="max-w-[60ch] font-1-s cor-6 mb-3 lg:mb-6">
              Nossa <span className="font-bold">missão</span> é apresentar
              soluções aos clientes com celeridade, ética e expertise.
            </blockquote>
            <blockquote className="max-w-[60ch] font-1-s cor-6">
              Nossa <span className="font-bold">visão</span> é ser o grupo
              jurídico moderno que apresenta soluções para empresas e famílias
              em âmbito nacional.
            </blockquote>
          </div>

          <Image
            width={328}
            height={328}
            alt="BRC Logo"
            className="mx-auto hidden md:block"
            src={"/img/logos/logo-branca.png"}
          />
        </div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://wa.me/5583981049965?text=Quero%20agendar%20uma%20reunião.%20Vim%20pelo%20site!!"
          }
          className="font-1-s flex items-center bg-transparent poppins gap-2 cursor-pointer underline group mt-6 justify-center sm:justify-start text-(--cor-4) hover:text-(--cor-0) duration-200"
        >
          Agendar uma consulta <CalendarCheck2 width={12} height={12} />
        </Link>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <div className="mb-6 flex gap-2 justify-between items-center w-full">
          <h3 className="font-1-xl ">
            Valores<span className="cor-p5">.</span>
          </h3>
          <Radar className="-rotate-45" width={36} height={36} />
        </div>
        <div className="relative w-full z-10">
          <ul className="font-1-xs gap-2 cor-1 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            <GlowingListItem>Ética e transparência</GlowingListItem>
            <GlowingListItem>Expertise e capacitação contínua</GlowingListItem>
            <GlowingListItem>Inovação e criatividade</GlowingListItem>
            <GlowingListItem>Meritocracia</GlowingListItem>
            <GlowingListItem>Liderança, proatividade e coragem</GlowingListItem>
            <GlowingListItem>Liderança, proatividade e coragem</GlowingListItem>
            <GlowingListItem className="md:col-span-2 lg:col-span-3">
              Posicionamento profissional e íntegro
            </GlowingListItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;

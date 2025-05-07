import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SecondSection = async () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-6 px-5 md:px-10 relative max-h-auto">
      <div className="pt-[4rem] py-0 lg:py-[4rem]">
        <div className="mb-6">
          <p className="fadeInDown font-1-m cor-6 text-center sm:text-start ml-0 sm:ml-1">
            RESPONSABILIDADE E TRANSPARÊNCIA
          </p>
          <h2 className="cor-azul-escuro font-3-xxl text-center sm:text-start">
            quem somos<span className="cor-p5">.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-1-s text-(--azul-escuro)/80 text-center sm:text-start ml-0 sm:ml-1">
            Um escritório que alinha tradição e inovação para fornecer soluções
            jurídicas excepcionais. Fundado com o compromisso de oferecer
            serviços jurídicos de excelência, nosso escritório tem uma orgulhosa
            história de sucesso e dedicação ao atendimento de nossos clientes.
          </p>
          <p className="font-1-s text-(--azul-escuro)/80 text-center sm:text-start ml-0 sm:ml-1">
            Fazendo uso da praticidade tecnológica e pensando na comodidade dos
            clientes, nosso time desenvolveu ferramentas especiais para a
            realização de um atendimento a distância de alto nível, o que
            possibilita uma maior celeridade na busca das melhores soluções dos
            conflitos.
          </p>
          <Link
            href={"/quem-somos"}
            className="font-1-s cor-azul-escuro flex gap-2 items-center justify-center sm:justify-start cursor-pointer underline ml-0 sm:ml-1 py-2"
          >
            Nos conheça melhor <MoveRight width={12} height={12} />
          </Link>
        </div>
      </div>
      <div className="pb-[4rem] lg:py-[4rem] flex justify-end self-center">
        <Image
          className="rounded-lg w-full object-cover"
          width={1024}
          height={732}
          src="/img/quem-somos/3-socios.jpg"
          alt="Sócios juntos"
        />
      </div>
    </section>
  );
};

export default SecondSection;

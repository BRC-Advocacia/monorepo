import OfficeCarousel from "@/components/home/OfficeCarousel";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FifthSection = () => {
  return (
    <section className="flex flex-col gap-6 px-5 py-[4rem] md:px-10 max-h-auto relative h-auto">
      <Image
        src={"/img/home/office-pic.jpg"}
        alt="Imagem de fundo da seção 'nossos escritórios' do site BRC."
        width={1200}
        height={1200}
        className="absolute h-full blur-[4px] w-screen top-0 left-0 object-cover -z-14"
      />
      <div className="absolute top-0 h-full left-0 right-0 bg-(--azul-escuro)/90 -z-10" />
      <Image
        src={"/img/logos/logo-branca-sem-nome.png"}
        alt="Logo branca BRC."
        className="absolute -z-9 left-5 sm:bottom-auto sm:top-[4rem] lg:top-auto lg:bottom-[4rem] sm:left-auto right-[40px] opacity-15 lg:opacity-20 h-[30px] w-auto"
        width={65}
        height={30}
        style={{ height: "auto", width: "auto" }}
      />
      <div>
        <p className="fadeInDown font-1-m cor-4 text-center sm:text-start ml-0 sm:ml-1">
          ATENDIMENTO EM TODO O BRASIL
        </p>
        <h2 className="cor-0 font-3-xxl text-center sm:text-start">
          nossa estrutura<span className="cor-p5">.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 items-start">
        <div className="h-[80%]">
          <OfficeCarousel />
        </div>
        <div className="grid justify-between h-full">
          <div className="flex flex-col mb-6 md:mb-12">
            <h3 className="cor-background font-1-xl font-[400] mb-3 md:mb-6">
              Serviço jurídico exemplar presencialmente na Paraíba em Campina
              Grande e Esperança<span className="cor-p2">.</span>
            </h3>
            <p className="font-1-s cor-6">
              Descubra nossos escritórios em Campina Grande e Esperança, onde a
              excelência jurídica se encontra com o atendimento personalizado.
              Estamos aqui para servir e oferecer soluções eficazes para suas
              necessidades legais.
            </p>
          </div>
          <Link
            href={"/contato"}
            className="pl-[1px] font-1-xs self-center py-2 poppins font-semibold cursor-pointer bg-transparent cor-p2 hover:bg-transparent rounded-2xl max-h-fit max-w-fit duration-200 relative animatedUnderline flex gap-2 items-center after:min-w-full lg:after:min-w-0"
          >
            Agende uma consulta presencial! <MoveRight width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;

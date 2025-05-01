import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="min-h-[600px] h-screen flex justify-center relative">
      <Image
        alt="Imagem de background para a seção de introdução da página."
        src={"/img/home/background-main.jpeg"}
        width={1200}
        height={1200}
        className="h-full w-screen object-cover object-bottom absolute bottom-0 z-1"
        sizes="100vw"
      />
      <div className="absolute bottom-0 h-full left-0 right-0 bg-(--azul-escuro)/90 z-5" />
      <div className="flex flex-col justify-center items-center px-5 py-[4rem] z-10">
        <h1 className="cor-0 font-3-xxl text-center">
          Somos um <span className="cor-p5">escritório</span>
          <br />
          personalizado para você
          <span className="cor-p5">.</span>
        </h1>
        <p className="text-slate-200/65 font-2-l mt-5 text-center">
          Com uma infraestrutura moderna, atendemos clientes de todo o Brasil
        </p>
        <PrimaryButton href="/contato" src="/img/icones/whatsapp.svg">
          Entre em contato!
        </PrimaryButton>
      </div>
    </section>
  );
};

export default FirstSection;

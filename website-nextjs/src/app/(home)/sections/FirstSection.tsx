import Image from "next/image";
import Link from "next/link";

const FirstSection = () => {
  return (
    <section>
      <div className="relative">
        <Image
          priority
          alt="Imagem de background para a seção de introdução da página."
          src={"/img/home/background-main.jpeg"}
          width={1200}
          height={1200}
          className="w-screen h-screen object-cover object-top absolute top-0 z-[-10]"
          sizes="100vw"
        />
        <div className="absolute top-0 h-screen left-0 right-0 bg-sky-950/50 z-[-9]" />
      </div>
      <div className="h-screen flex flex-col justify-center items-center px-5">
        <h1 className="cor-0 font-3-xxl text-center">
          Somos um <span className="cor-p5">escritório</span>
          <br />
          personalizado
          <span className="cor-p5">.</span>
        </h1>
        <p className="text-slate-200/65 font-2-l mt-5 text-center">
          Com uma infraestrutura moderna, atendemos clientes de todo o Brasil
        </p>
        <Link
          href={"/contato"}
          className="py-3 px-6 poppins text-xl cor-azul-escuro bg-(--cor-p2) rounded flex gap-2 mt-10 shadow shadow-slate-900"
        >
          Entre em contato!
          <Image
            src={"/img/icones/whatsapp.svg"}
            alt="Ícone do Whatsapp"
            width={18}
            height={18}
          />
        </Link>
      </div>
    </section>
  );
};

export default FirstSection;

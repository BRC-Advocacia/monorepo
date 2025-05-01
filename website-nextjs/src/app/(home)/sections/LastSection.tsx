import Image from "next/image";
import Link from "next/link";

const LastSection = async () => {
  return (
    <section className="flex flex-col gap-6 px-5 py-[4rem] md:px-10 max-h-auto h-auto  overflow-hidden relative">
      <Image
        priority
        alt="Imagem de background para a seção de introdução da página."
        src={"/img/home/atuacao-bg.jpeg"}
        width={1200}
        height={1200}
        className="w-screen h-full blur-[4px] object-cover object-top absolute left-0 top-0 z-[-10] opacity-70"
        sizes="100vh"
      />
      <div className="absolute top-0 h-full left-0 right-0 bg-(--cor-p1)/80 z-[-9]" />

      <div className="flex flex-col">
        <p className="fadeInDown font-1-m background text-center sm:text-start ml-0 sm:ml-1">
          ESCOLHA O MELHOR PARA VOCÊ
        </p>
        <h2 className="font-3-xxl cor-azul-escuro text-center sm:text-start">
          fale conosco<span className="cor-background">.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 relative">
        <div className="flex flex-col items-center mb-12 lg:mb-24">
          <h2 className="font-1-xl cor-12 mt-6 cor-azul-escuro mb-3 text-center">
            <span className="font-[400]">Especialistas dedicados</span>
            <br />
            focados em te entregar os{" "}
            <span className="font-[400]">melhores resultados!</span>
          </h2>
          <p className="font-1-s text-(--azul-escuro)/80 text-center">
            Entre em contato conosco!
          </p>
          <div className="mt-6 flex gap-3 mx-auto">
            <Link
              className="flex gap-2 items-center max-w-fit py-2 rounded-2xl cor-12 poppins font-1-x hover:-translate-y-[2px] duration-200"
              href={
                "https://wa.me/5583981049965?text=Ol%C3%A1%2C%20vim%20pelo%20site!!"
              }
            >
              <Image
                width={24}
                height={24}
                src="/img/icones/green-whats.svg"
                alt="Ícone do whatsapp"
                className="w-8 h-8"
              />
            </Link>
            <Link
              className="flex gap-2 items-center max-w-fit py-2 rounded-2xl cor-12 poppins font-1-x hover:-translate-y-[2px] duration-200"
              href={"https://www.instagram.com/brcadvogados"}
            >
              <Image
                width={24}
                height={24}
                src="/img/icones/instagram.svg"
                alt="Ícone do Instagram"
                className="w-8 h-8"
              />
            </Link>
            <Link
              className="flex gap-2 items-center max-w-fit py-2 rounded-2xl cor-12 poppins font-1-x hover:-translate-y-[2px] duration-200"
              href={"mailto:contato.brcadvogados@gmail.com"}
            >
              <Image
                width={24}
                height={24}
                src="/img/icones/email.svg"
                alt="Ícone do Email"
                className="w-8 h-8"
              />
            </Link>
          </div>
        </div>
        <Image
          src={"/img/logos/logo-azul-sem-nome.png"}
          alt="Logo azul BRC Advogados."
          className="mx-auto opacity-15 lg:opacity-50 pl-2"
          width={65}
          height={30}
          style={{ height: "auto", width: "auto" }}
        />
      </div>
    </section>
  );
};

export default LastSection;

export const gradientTailwind = `bg-gradient-to-br from-(--cor-p2) to-(--azul-escuro)`;

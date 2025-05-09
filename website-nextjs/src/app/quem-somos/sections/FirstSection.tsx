import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="relative">
      <div className="px-5 md:px-10 bg-(--azul-escuro) flex flex-col py-[4rem] text-center min-h-[600px] h-screen justify-center relative overflow-hidden">
        <Image
          alt="Imagem de background para a seção de introdução da página."
          src={"/img/quem-somos/3-socios.jpg"}
          width={1200}
          height={1200}
          className="h-full w-screen object-cover object-[80%_10%] absolute left-0 bottom-0 z-1"
          sizes="100vw"
        />
        <div className="absolute bottom-0 h-full left-0 right-0 bg-(--azul-escuro)/85 z-5" />
        <div className="z-6">
          <p className="text-slate-200/65 font-2-l mt-5 uppercase">
            conheça a nossa história
          </p>
          <h1 className="cor-0 font-3-xxl">
            Somos a sociedade de
            <br /> advogados {` `} <span className="cor-p5">BRC</span>.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

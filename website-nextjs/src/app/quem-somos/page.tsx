import Image from "next/image";

export default function Page() {
  return (
    <main className={"flex flex-col relative"}>
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
            <br /> advogados {` `} <span className="cor-p5">BRCR</span>.
          </h1>
        </div>
      </div>
      <div className="bg-(--background) px-5 md:px-10 py-[4rem] font-1-s cor-azul-escuro text-center sm:text-start ml-0 sm:ml-1">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="font-1-xl cor-azul-escuro mb-6">
              nossa história<span className="cor-p5">.</span>
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col justify-start gap-6">
                <p>
                  Nos últimos anos, o quadro societário - BRCR, implementou
                  estratégias para inovar a atuação jurídica. Reformulou sua
                  prática de contencioso adequando-a à necessidade do mercado
                  por soluções rápidas e extrajudiciais, a partir da
                  implementação de gestão de dados e qualidade técnica.
                </p>
                <p>
                  Nossa cultura colaborativa, nos faz mais do que um escritório
                  de advocacia. Somos um parceiro estratégico para nossos
                  clientes, entregando soluções jurídicas e de negócios com
                  inovação, agilidade e criatividade.
                </p>
                <p>
                  Seguimos com o propósito de fortalecer nossa atuação por meio
                  de parcerias sólidas e uma infraestrutura cuidadosamente
                  pensada. O conceito moderno e a visão de negócio permeia por
                  completo a atuação da sociedade de advogados - BRCR.
                </p>
              </div>
              <Image
                alt="Imagem dos sócios Batista e Ramos."
                src={"/img/socios/batista-e-ramos.jpg"}
                width={1200}
                height={1200}
                className="rounded-lg max-h-[500px] w-[80%] object-cover object-top mx-auto"
                sizes="100vw"
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="cor-azul-escuro font-1-xl mb-6">
              advocacia real e personalizada<span className="cor-p5">.</span>
            </h2>
            <p className="max-w-[50ch] font-2-l mx-auto">
              Nosso escritório traz consigo a proposta de uma advocacia moderna
              e sem fronteiras.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

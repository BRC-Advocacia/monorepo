import { Quote } from "lucide-react";
import Image from "next/image";

const SecondSection = () => {
  return (
    <section className="px-5 md:px-10 bg-(--background) py-[4rem] cor-azul-escuro text-center sm:text-start relative">
      <Quote
        className="absolute top-[1rem] left-5 md:left-10 right-5 sm:right-auto mx-auto cor-4 scale-x-[-1]"
        width={48}
        height={48}
      />
      <h2 className="font-3-xxl text-center sm:text-start cor-azul-escuro mb-6">
        nossa história<span className="cor-p5">.</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
        <div className="flex flex-col justify-start gap-6 font-1-s">
          <p>
            Nos últimos anos, o quadro societário - BRC, implementou estratégias
            para inovar a atuação jurídica. Reformulou sua prática de
            contencioso adequando-a à necessidade do mercado por soluções
            rápidas e extrajudiciais, a partir da implementação de gestão de
            dados e qualidade técnica.
          </p>
          <p>
            Nossa cultura colaborativa, nos faz mais do que um escritório de
            advocacia. Somos um parceiro estratégico para nossos clientes,
            entregando soluções jurídicas e de negócios com inovação, agilidade
            e criatividade.
          </p>
          <p>
            Seguimos com o propósito de fortalecer nossa atuação por meio de
            parcerias sólidas e uma infraestrutura cuidadosamente pensada. O
            conceito moderno e a visão de negócio permeia por completo a atuação
            da sociedade de advogados - BRC.
          </p>
        </div>
        <Image
          alt="Imagem dos sócios Batista e Ramos."
          src={"/img/socios/batista-e-ramos.jpg"}
          width={1200}
          height={1200}
          className="rounded-lg max-h-[600px] w-[80%] object-cover object-top mx-auto"
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default SecondSection;

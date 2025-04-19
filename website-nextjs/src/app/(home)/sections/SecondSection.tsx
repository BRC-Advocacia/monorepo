import Image from "next/image";
import React from "react";

const SecondSection = () => {
  return (
    <section className="py-[4rem] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 px-5 md:px-10 relative max-h-screen">
      <div className="lg:py-5">
        <div className="mb-5 lg:mb-10">
          <p className="fadeInDown font-1-m cor-6 ">
            RESPONSABILIDADE E TRANSPARÊNCIA
          </p>
          <h2 className="cor-azul-escuro font-3-xxl ">
            quem somos<span className="cor-p5">.</span>
          </h2>
        </div>
        <p className="font-1-s cor-azul-escuro container">
          Um escritório que alia tradição e inovação para fornecer soluções
          jurídicas excepcionais. Fundado com o compromisso de oferecer serviços
          jurídicos de excelência, nosso escritório tem uma orgulhosa história
          de sucesso e dedicação ao atendimento de nossos clientes.
        </p>
      </div>
      <div className="lg:py-5 flex justify-end self-center">
        <Image
          className="rounded-2xl w-full max-h-[80vh] object-cover"
          width={1024}
          height={732}
          src="/img/quem-somos/3-socios.jpg"
          alt="Sócios juntos"
        />
      </div>
      <Image
        src={"/img/decoracoes/bottom-left.svg"}
        alt="Decoração"
        width={64}
        height={64}
        className="hidden lg:block absolute bottom-[32px] left-10"
      />
    </section>
  );
};

export default SecondSection;

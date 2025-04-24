import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const FourthSection = () => {
  return (
    <section className="flex flex-col gap-6 px-5 py-[4rem] md:px-10 relative max-h-auto lg:max-h-screen mb-12">
      <div>
        <p className="fadeInDown font-1-m cor-6 text-center sm:text-start">
          RESPONSABILIDADE E TRANSPARÊNCIA
        </p>
        <h2 className="cor-azul-escuro font-3-xxl text-center sm:text-start">
          nosso time<span className="cor-p5">.</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Card className="bg-transparent px-6 py-8 relative min-h-[550px]">
          <Image
            src={"/img/socios/batista.jpg"}
            alt="Imagem do sócio Batista."
            className="absolute -z-100 top-0 left-0 h-full w-full object-cover rounded-2xl"
            width={360}
            height={600}
          />
          <div className="bg-zinc-900/80 absolute top-0 left-0 right-0 bottom-0 rounded-2xl" />
          <CardTitle className="absolute z-100">
            <p className="cor-7 poppins font-[400]">socio</p>
            <h2 className="cor-4 poppins font-[600] text-2xl mb-4">
              Francian Batista
            </h2>
          </CardTitle>
          <CardContent className="absolute z-10 bottom-[2rem] left-0">
            <p className="cor-8 poppins font-[400]">
              Coordenador de Comissões OAB/CG
            </p>
          </CardContent>
        </Card>
        <Card className="bg-transparent px-6 py-8 relative min-h-[550px]">
          <Image
            src={"/img/socios/batista.jpg"}
            alt="Imagem do sócio Batista."
            className="absolute -z-100 top-0 left-0 h-full w-full object-cover rounded-2xl"
            width={360}
            height={600}
          />
          <div className="bg-zinc-900/80 absolute top-0 left-0 right-0 bottom-0 rounded-2xl" />
          <CardTitle className="absolute z-100">
            <p className="cor-7 poppins font-[400]">sócio</p>
            <h2 className="cor-4 poppins font-[600] text-2xl">
              Francian Batista
            </h2>
          </CardTitle>
          <CardContent className="absolute z-10"></CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FourthSection;

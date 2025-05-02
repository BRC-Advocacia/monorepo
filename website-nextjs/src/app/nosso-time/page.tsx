import PartnerSection from "@/components/nosso-time/PartnerSection";
import { partners } from "@/data/Partners";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="min-h-[600px] h-screen py-[4rem] px-5 md:px-10 flex relative overflow-hidden">
        <Image
          src={"/img/home/office-pic.jpg"}
          alt="Imagem de fundo da seção 'nossos escritórios' do site BRC."
          width={1200}
          height={1200}
          className="absolute h-full blur-[4px] w-screen top-0 left-0 object-cover -z-14"
        />
        <div className="absolute top-0 h-full left-0 right-0 bg-(--azul-escuro)/90 -z-10" />
        <div className="mb-5 lg:mb-10 z-1 flex flex-col justify-center items-center mx-auto">
          <h1 className="cor-0 font-3-xxl text-center">
            Conheça a nossa equipe
            <span className="cor-p5">.</span>
          </h1>
          <p className="text-slate-200/65 font-2-l mt-5 text-center max-w-[55ch]">
            Advogados experientes com anos de expertise em diversas áreas do
            direito.
            <br />
            Estamos comprometidos em oferecer representação jurídica
            excepcional, com integridade e dedicação.
          </p>
        </div>
      </section>
      <section className="flex flex-col px-5 md:px-10 py-[4rem]">
        {partners.map((partner) => (
          <PartnerSection key={partner.name} partner={partner} />
        ))}
      </section>
    </>
  );
}

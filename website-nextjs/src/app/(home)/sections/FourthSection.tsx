import PartnersCarousel from "@/components/home/PartnersCarousel";

const FourthSection = () => {
  return (
    <section className="flex flex-col gap-6 px-5 md:px-10 relative max-h-auto py-[4rem]">
      <div>
        <p className="fadeInDown font-1-m cor-6 text-center sm:text-start ml-0 sm:ml-1">
          RESPONSABILIDADE E TRANSPARÊNCIA
        </p>
        <h2 className="cor-azul-escuro font-3-xxl text-center sm:text-start">
          nosso time<span className="cor-p5">.</span>
        </h2>
      </div>
      <PartnersCarousel />
    </section>
  );
};

export default FourthSection;

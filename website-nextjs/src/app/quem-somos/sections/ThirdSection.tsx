import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { values } from "@/data/Partners";

const ThirdSection = () => {
  return (
    <section className="py-[4rem] text-center px-5 md:px-10 ">
      <h2 className="cor-azul-escuro font-1-xl mb-6">
        advocacia real e personalizada<span className="cor-p5">.</span>
      </h2>
      <p className="max-w-[50ch] font-2-l mx-auto text-(--azul-escuro)/80">
        Nosso escritório traz consigo a proposta de uma advocacia moderna e sem
        fronteiras.
      </p>

      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-[2rem]">
        <InfiniteMovingCards
          pauseOnHover={false}
          items={values}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default ThirdSection;

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { values } from "@/data/Partners";
import { cn } from "@/lib/utils";

const ThirdSection = () => {
  return (
    <section
      className={cn(
        "pt-[2rem] pb-[4rem] md:pt-[4rem] md:pb-[4rem] text-center px-5 md:px-10 text-(--azul-escuro)"
      )}
    >
      <h2 className="font-1-xl mb-4">
        advocacia real e personalizada<span className="cor-p5">.</span>
      </h2>
      <p className="max-w-[50ch] font-2-l mx-auto text-(--azul-escuro)/50">
        Nosso escritório traz consigo a proposta de uma advocacia moderna e sem
        fronteiras.
      </p>

      <div className="rounded-md flex flex-col antialiased text-(--azul-escuro) items-center justify-center relative overflow-hidden mt-[2rem]">
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

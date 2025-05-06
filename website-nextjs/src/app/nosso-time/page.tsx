import { partners } from "@/data/Partners";
import PartnerCard from "@/components/nosso-time/PartnerCard";

export default function Page() {
  return (
    <section
      className={
        "flex flex-col px-5 md:px-10 py-[4rem] gap-[4rem] bg-(--azul-escuro) relative bg-gradient-to-r from-(--azul-escuro)/100 to-(--cor-11)/100"
      }
    >
      <div className="flex flex-col pt-[4rem] px-5 md:px-10 text-center">
        <h1 className="cor-0 font-3-xxl">
          Conheça a nossa equipe
          <span className="cor-p5">.</span>
        </h1>
      </div>

      {partners.map((partner) => (
        <div key={partner.name}>
          <PartnerCard partner={partner} />
        </div>
      ))}
    </section>
  );
}

import { PartnerProps } from "@/data/Partners";
import Image from "next/image";
import Link from "next/link";

function padronizeText(texto: string) {
  return texto
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")[1]
    .toLowerCase();
}

export default function PartnerSection({ partner }: { partner: PartnerProps }) {
  return (
    <div
      id={padronizeText(partner.name)}
      className="grid grid-cols-[390px_3fr] gap-[4rem] min-h-[600px] max-h-[800px]"
    >
      <div className="flex flex-col">
        <Image
          src={partner.image.replace("-none", "").replace("png", "jpg")}
          alt={"Foto do sócio" + partner.name}
          width={600}
          height={600}
          className="object-cover object-top mb-2 rounded-lg"
        />
        <div className="mb-4 text-center">
          <h2 className="poppins font-[600] text-4xl cor-12 cor-azul-escuro tracking-tight">
            {partner.name}
          </h2>
          <p className="cor-7 poppins font-[400] text-lg">Sócio Fundador</p>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <Link
            href={partner.linkedinUrl}
            className="p-2 opacity-90 hover:opacity-100 duration-300 hover:scale-[1.025]"
          >
            <Image
              src={"/img/icones/linkedin.svg"}
              alt="Ícone do Linkedin"
              width={18}
              height={18}
            />{" "}
          </Link>
          <Link
            href={""}
            className="p-2 opacity-90 hover:opacity-100 duration-300 hover:scale-[1.025]"
          >
            <Image
              src={"/img/icones/instagram.svg"}
              alt="Ícone do Instagram"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
      <div>
        <h3 className="font-2-xl">Biografia</h3>
        <p>{partner.fullDescription}</p>
      </div>
    </div>
  );
}

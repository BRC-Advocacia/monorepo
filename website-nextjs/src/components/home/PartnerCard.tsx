import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import Link from "next/link";
import { BookmarkCheck, MoveRight } from "lucide-react";
import { PartnerProps } from "@/data/Partners";

const PartnerCard = ({ partner }: { partner: PartnerProps }) => {
  return (
    <Card className="bg-transparent px-6 py-8 relative min-h-[550px] gap-0 w-full overflow-hidden">
      <div>
        <Image
          src={partner.image || "/img/socios/placeholder.jpg"}
          alt={`Imagem do sócio ${partner.name}.`}
          className="absolute -z-80 top-0 left-0 h-full w-full object-cover sm:object-top rounded-lg"
          width={360}
          height={600}
        />
        <div className="bg-gradient-to-br from-(--azul-escuro)/95 to-(--cor-12)/90 absolute -z-100 top-0 left-0 right-0 bottom-0 rounded-lg" />
        <div className="bg-gradient-to-br from-(--azul-escuro)/10 to-(--cor-12)/10 absolute -z-70 top-0 left-0 right-0 bottom-0 rounded-lg" />
      </div>
      <div className="grow grid grid-cols-1 grid-rows-[auto_1fr]">
        <CardTitle className="m-0 p-0 flex flex-col md:flex-row justify-between md:items-center mb-4">
          <div>
            <p className="cor-7 poppins font-[400]">sócio</p>
            <h2 className="cor-4 poppins font-[600] text-2xl">
              {partner.name}
            </h2>
          </div>
          <Link
            href={partner.linkedinUrl}
            className="opacity-80 hover:scale-[1.02] hover:opacity-95"
          >
            <Image
              src={"/img/icones/linkedin-white.svg"}
              alt="Ícone Linkedin"
              width={24}
              height={24}
            />
          </Link>
        </CardTitle>
        <CardContent className="poppins px-0 mx-0 flex flex-col justify-between">
          <div className="flex flex-col gap-2 cor-p1 mb-10">
            {partner.specialties.map((specialty, index) => (
              <p key={index} className="flex gap-2 items-center">
                <BookmarkCheck width={18} height={18} className="mt-[2px]" />
                {specialty}
              </p>
            ))}
          </div>
          <div>
            <p className="cor-2 font-[400] text-sm">{partner.highlight}</p>
            <Link
              href={partner.href}
              className="flex items-center bg-transparent poppins cor-4 gap-2 cursor-pointer underline group mt-6"
            >
              Conheça <MoveRight width={12} height={12} />
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
export default PartnerCard;

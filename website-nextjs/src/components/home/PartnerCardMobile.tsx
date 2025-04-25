import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import Link from "next/link";
import { BookmarkCheck, MoveRight } from "lucide-react";

export type PartnerProps = {
  name: string;
  image: string;
  linkedinUrl: string;
  specialties: string[];
  highlight: string;
};

const PartnerCardMobile = ({ partner }: { partner: PartnerProps }) => {
  return (
    <Card className="bg-transparent px-6 py-8 relative min-h-[550px] gap-0 w-full">
      <div>
        <Image
          src={
            `${partner.image.split(".")[0]}-none.png` ||
            "/img/socios/placeholder.jpg"
          }
          alt={`Imagem do sócio ${partner.name}.`}
          className="absolute -z-80 h-full object-cover rounded-2xl w-full object-top  md:w-[70%] bottom-0 right-0"
          width={360}
          height={600}
        />
        <div className="bg-slate-900/80 absolute -z-100 top-0 left-0 right-0 bottom-0 rounded-2xl" />
        <div className="bg-slate-900/40 absolute -z-70 top-0 left-0 right-0 bottom-0 rounded-2xl" />
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
            className="opacity-80 hover:opacity-95 my-2 p-0"
          >
            <Image
              src={"/img/icones/linkedin-white.svg"}
              alt="Ícone Linkedin"
              width={32}
              height={32}
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
            <button className="flex items-center bg-transparent poppins cor-4 gap-2 cursor-pointer underline group mt-6">
              Conheça <MoveRight width={12} height={12} />
            </button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
export default PartnerCardMobile;

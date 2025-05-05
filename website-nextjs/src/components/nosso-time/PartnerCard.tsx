import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import { PartnerProps } from "@/data/Partners";
import Link from "next/link";
import { BookmarkCheck, Instagram, Linkedin, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PartnerCard = ({ partner }: { partner: PartnerProps }) => {
  return (
    <Card
      className={cn(
        "px-6 py-8 min-h-[600px] mx-auto max-w-[1000px] gap-0 w-full rounded-lg border-none relative",
        "bg-(--background)",
        "bg-gradient-to-br from-(--azul-escuro)/100 to-(--cor-11)/100"
      )}
    >
      <div
        className={cn(
          "h-full flex flex-col items-center",
          "absolute bottom-0 right-0 -z-0"
        )}
      >
        <Image
          src={
            // partner.image.replace("-none", "").replace("png", "jpg") ||
            partner.image || "/img/socios/placeholder.jpg"
          }
          alt={`Imagem do sócio ${partner.name}.`}
          className={cn(
            "h-full w-auto object-cover sm:object-top rounded-lg opacity-30 md:opacity-40 lg:opacity-100"
          )}
          width={360}
          height={600}
        />
      </div>
      {/* <div className="absolute -top-4 md:top-4 z-10 -right-0 md:right-4">
        <div className="flex gap-1 items-center justify-center">
          <Link
            href={partner.linkedinUrl}
            className="opacity-90 hover:opacity-100 duration-300 bg-(--background) rounded-lg p-2"
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
            className="opacity-90 hover:opacity-100 duration-300 bg-(--background) rounded-lg p-2"
          >
            <Image
              src={"/img/icones/instagram.svg"}
              alt="Ícone do Instagram"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div> */}
      <div className="grow grid grid-cols-1 grid-rows-[auto_1fr] z-1">
        <CardTitle className="m-0 p-0 flex flex-col mb-4">
          <div className="mb-4 grow">
            <div className="flex justify-between items-center">
              <p className="text-(--background)/50 poppins font-[400] text-lg ml-[2px]">
                Sócio Fundador
              </p>
              <div className="flex gap-1 items-center justify-center">
                <Link
                  href={partner.linkedinUrl}
                  className="opacity-90 hover:opacity-100 duration-300 rounded-lg p-2"
                >
                  <Linkedin
                    className="text-(--background)/50 hover:text-(--background)"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href={""}
                  className="opacity-90 hover:opacity-100 duration-300 rounded-lg p-2"
                >
                  <Instagram
                    className="text-(--background)/50 hover:text-(--background)"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
            <h2 className="poppins font-[600] text-2xl sm:text-3xl md:text-4xl cor-2 tracking-tight">
              {partner.name}
            </h2>
          </div>
        </CardTitle>
        <CardContent className="poppins px-0 mx-0 flex flex-col justify-between gap-[0px]">
          <div className="grid gap-6">
            <p className="max-w-[50ch] text-(--background)/50">
              {partner.fullDescription}
            </p>
            <div className="flex flex-col gap-2 cor-p2 mb-10">
              {partner.specialties.map((specialty, index) => (
                <p key={index} className="flex gap-2 items-center">
                  <BookmarkCheck width={18} height={18} className="mt-[2px]" />
                  {specialty}
                </p>
              ))}
            </div>
          </div>

          <div className="cor-2">
            <p className="font-[400] text-sm">{partner.highlight}</p>
            <Link
              href={partner.href}
              className="flex items-center bg-transparent poppins gap-2 cursor-pointer underline group mt-6"
            >
              Agendar uma consulta <MoveRight width={12} height={12} />
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default PartnerCard;

import { PartnerProps } from "@/data/Partners";
import Image from "next/image";

export default function PartnerSection({ partner }: { partner: PartnerProps }) {
  return (
    <div className="grid grid-cols-[1fr_3fr] gap-6">
      <div className="flex flex-col gap-3">
        <Image
          src={partner.image}
          alt={"Foto do sócio" + partner.name}
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}

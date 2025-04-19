import Image from "next/image";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThridSection from "./sections/ThridSection";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThridSection />
      <Link
        className="hidden md:flex items-center gap-4 fixed bottom-10 right-17"
        href="/contato"
      >
        <p className="font-1-s cor-0 bg-slate-800 py-[6px] px-[8px] rounded-[8px]">
          Vamos conversar
        </p>
        <Image
          width={64}
          height={64}
          src="/img/icones/green-whats.svg"
          alt="Nosso WhatsApp"
        />
      </Link>
    </>
  );
}

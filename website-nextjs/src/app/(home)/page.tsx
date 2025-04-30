import Image from "next/image";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThridSection from "./sections/ThridSection";
import Link from "next/link";
import FourthSection from "./sections/FourthSection";
import FifthSection from "./sections/FifthSection";
import LastSection from "./sections/LastSection";

export default async function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThridSection />
      <FourthSection />
      <FifthSection />
      <LastSection />
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
          className="w-auto h-auto"
          alt="Nosso WhatsApp"
        />
      </Link>
    </>
  );
}

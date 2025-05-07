import Image from "next/image";
import Link from "next/link";

type TPrimaryButton = {
  href: string;
  src?: string;
  children: React.ReactNode;
};

const PrimaryButton: React.FC<TPrimaryButton> = ({
  href,
  children,
  src,
}: TPrimaryButton) => {
  return (
    <Link
      href={href}
      className="py-3 px-8 poppins text-xl cor-azul-escuro bg-(--cor-p2) flex flex-col sm:flex-row gap-2 mt-10 shadow shadow-slate-900 items-center rounded-full"
    >
      {children}
      {src && (
        <Image
          src={src}
          alt={`Ícone de ${
            src.split("/")[src.split("/").length - 1].split(".")[0]
          }`}
          className="w-[18px] h-[18px]"
          width={18}
          height={18}
        />
      )}
    </Link>
  );
};

export default PrimaryButton;

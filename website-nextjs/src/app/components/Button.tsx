import Image from "next/image";
import Link from "next/link";

type TPrimaryButton = {
  href: string;
  src: string;
  children: React.ReactNode;
};

const Button: React.FC<TPrimaryButton> = ({
  href,
  children,
  src,
}: TPrimaryButton) => {
  return (
    <Link
      href={href}
      className="py-3 px-6 poppins text-xl cor-azul-escuro bg-(--cor-p2) rounded flex gap-2 mt-10 shadow shadow-slate-900"
    >
      {children}
      {src && (
        <Image
          src={src}
          alt={`Ícone de ${
            src.split("/")[src.split("/").length - 1].split(".")[0]
          }`}
          width={18}
          height={18}
        />
      )}
    </Link>
  );
};

export default Button;

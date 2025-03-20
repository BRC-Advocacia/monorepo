import LoginForm from "@/app/components/LoginForm";
import styles from "./page.module.css";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-dvh grid grid-cols-2 gap-8 items-center justify-center bg-[#000]">
      <div className="flex w-full h-full">
        <Image
          className="w-full h-auto object-cover object-center"
          src={"/socios/socios01.jpg"}
          alt="Foto dos sócios - BRC Advogados"
          width={1200}
          height={1200}
        />
      </div>
      <div className="p-8 rounded shadow-md w-[80%] border-blue flex flex-col justify-between">
        <Image
          className="object-cover object-center"
          src={"/logos/logo-azul.svg"}
          alt="Foto dos sócios - BRC Advogados"
          width={124}
          height={124}
        />
        <div>
          <h1
            className={`text-6xl font-bold mb-6 text-gray-100 relative max-w-fit z-999 ${styles.h1}`}
          >
            Login
          </h1>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

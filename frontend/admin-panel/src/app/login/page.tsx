"use client";
import LoginForm from "@/app/components/LoginForm";
import styles from "./page.module.css";
import Image from "next/image";
import { AuroraBackground } from "../components/AuroraBackground";
import { motion } from "motion/react";

export default function LoginPage() {
  return (
    <AuroraBackground>
      <motion.main className="min-h-dvh w-screen flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-2 gap-8 items-center justify-center bg-[#000]">
        <div className="hidden lg:flex w-full h-full">
          <Image
            className="w-full h-auto object-cover object-center relative z-159"
            src={"/socios/socios01.jpg"}
            alt="Foto dos sócios - BRC Advogados"
            width={1200}
            height={1200}
          />
        </div>
        <div className="p-8 rounded w-full sm:w-[80%] border-blue flex flex-col justify-between">
          <Image
            className="object-cover object-center h-auto mx-auto mb- lg:mx-0"
            src={"/logos/logo-azul.svg"}
            alt="Logo - BRC Advogados"
            width={124}
            height={124}
          />
          <div className="flex flex-col items-center lg:block">
            <h1
              className={`self-start text-6xl font-bold my-8 text-[#B3961D] relative max-w-fit z-999 ${styles.h1}`}
            >
              Login
            </h1>
            <LoginForm />
          </div>
        </div>
      </motion.main>
    </AuroraBackground>
  );
}

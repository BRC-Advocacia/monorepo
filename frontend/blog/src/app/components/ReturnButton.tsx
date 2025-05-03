'use client'

import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <>
        <div className="flex gap-3 items-center">
            <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="flex items-center gap-2 hover:bg-gray-100 hover:cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Blog
          </Button>

        </div>
    </>

  );
}

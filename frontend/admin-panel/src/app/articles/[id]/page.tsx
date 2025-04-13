"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import ArticleForm from "@/app/components/article/ArticleForm";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/app/components/routes/ProtectedRoute";
import { Button } from "@/app/components/card-ui/Button";
import { ArrowLeft } from "lucide-react";

export default function EditArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const router = useRouter();
  const [auth, setAuth] = useState<string | null>(null);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const token = localStorage.getItem("access_token");
        setAuth(() => token);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/articles/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setArticle(response.data);
      } catch (error) {
        if (
          axios.isAxiosError(error) &&
          error.response &&
          error.response.status === 401
        ) {
          router.push("/login");
        } else {
          console.error(
            "Erro ao carregar os artigos no painel administrativo ",
            error
          );
        }
      }
    };
    fetchArticle();
  }, [router, params.id]);

  if (!article) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-100 p-8">Carregando...</div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-8">
        <div>
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 hover:bg-gray-100 hover:cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Dashboard
          </Button>
        </div>

        {auth && (
          <div>
            <ArticleForm article={article} />
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}

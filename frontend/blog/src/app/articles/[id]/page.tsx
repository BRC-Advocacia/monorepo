"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

export default function ArticleDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<{
    title: string;
    content: string;
    coverImage?: string;
  } | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setArticle(response.data);
      } catch (err) {
        console.error("Erro ao buscar o artigo:", err);
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return <div className="min-h-screen bg-gray-100 p-8">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded shadow-md max-w-4xl mx-auto">
        {article.coverImage && (
          <div className="relative w-full h-96 mb-8">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { ArticleCard } from "./ArticleCard";
import ProtectedRoute from "../routes/ProtectedRoute";

export interface Article {
  id: number;
  title: string;
}

const ArticlesDashboard = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          router.push("/login");
          return;
        }

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/articles`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setArticles(response.data);
      } catch {
        router.push("/login");
      }
    };
    fetchArticles();
  }, [router]);

  return (
    <ProtectedRoute>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            router={router}
            key={article.id}
            id={article.id}
            title={article.title}
            setArticles={setArticles}
          />
        ))}
      </div>
    </ProtectedRoute>
  );
};

export default ArticlesDashboard;

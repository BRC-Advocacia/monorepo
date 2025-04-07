"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../services/api";

export interface Article {
  id: number;
  title: string;
  content: string;
  coverImage?: string;
  author: {
    username: string;
    fullname: string;
  };
}

export default function FetchArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const router = useRouter();

  useEffect(() => {
    try {
      const fetchArticles = async () => {
        const response = await api.get<Article[]>(`/articles`);
        console.log("response", response);
        setArticles(response.data);
      };
      fetchArticles();
    } catch (err) {
      console.error("test err", err);
    }
  }, [router]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div key={article.id} className={index === 0 ? "md:col-span-3" : ""}>
          {article.coverImage && (
            <div className="relative w-full h-64 mb-4">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
          <h1 className="text-2xl">{article.title}</h1>
          <p>
            {article.content.length > 70
              ? `${article.content.slice(0, 70)}...`
              : article.content}
          </p>
          {/* <div dangerouslySetInnerHTML={{ __html: article.content.length > 70 ? `${article.content.slice(0, 70)}...` : article.content }} /> */}
          <span className="text-yellow-300">Por {article.author.fullname}</span>
        </div>
      ))}
    </div>
  );
}

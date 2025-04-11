import { ArrowRight, Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarImage } from "@/app/components/ui/Avatar";
import { Button } from "@/app/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/Card";
import Image from "next/image";
import { Article } from "./ArticlesDashboard";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../services/api";

export interface ArticleType extends Article {
  coverImage?: string;
  content?: string;
  author: {
    fullname: string;
    oabnumber: string;
    entitlement: string;
  };
  title: string;
}

export function ArticleCard({
  id,
  title,
  content,
  setArticles,
  router,
}: {
  id: number;
  title: string;
  content?: string;
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  router: AppRouterInstance;
}) {
  const [articleData, setArticleData] = useState<ArticleType | null>(null);
  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem("access_token");
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setArticles((articles) =>
        articles.filter((article) => article.id !== id)
      );
    } catch (err) {
      console.error("handleDelete error:", err);
    }
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await api.get(`/articles/${id}`);
        console.log("res.data", res.data)
        setArticleData(res.data);
      } catch (error) {
        console.error("articleCard", error);
      }
    };
    fetchArticle();
    console.log("articleData", articleData)

  }, [id]);

  return (
    <Card className="flex flex-col py-0 pb-6 m-w-[350px] overflow-hidden bg-gray-950 justify-between border border-gray-800">
      <div className="w-full">
        {articleData?.coverImage && (
          <div className="relative w-full h-64 mb-4">
            <img
              src={articleData?.coverImage}
              alt={articleData.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-gray-200">{title}</CardTitle>
        <CardDescription className="text-gray-400 flex grow">
          {content}
        </CardDescription>
        <div className="flex items-center mt-2 space-x-2 grow">
          <Avatar>
            <AvatarImage
              src="/logos/logo-azul.svg"
              alt="Creator"
              className="BRC"
            />
          </Avatar>
              <span className="text-sm text-gray-700">{articleData.title}</span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex gap-3 justify-start md:justify-start">
          <Button
            variant="outline"
            onClick={() => router.push(`/articles/${id}`)}
            className="flex items-center gap-1 hover:bg-transparent cursor-pointer hover:text-gray-200 duration-200"
          >
            <Pencil className="h-3 w-3" />
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(id)}
            variant="outline"
            className="flex items-center gap-1 text-destructive hover:bg-transparent hover:text-destructive cursor-pointer  duration-200"
          >
            <Trash2 className="h-3 w-3" />
            Delete
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex justify-start items-end md:justify-end">
        <Button className="flex items-center gap-2 cursor-pointer border border-gray-800 hover:bg-transparent">
          Ver artigo
          <ArrowRight className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
}

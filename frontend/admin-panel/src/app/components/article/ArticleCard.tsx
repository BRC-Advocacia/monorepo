import { Calendar, ArrowRight, Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarImage } from "@/app/components/card-ui/Avatar";
import { Button } from "@/app/components/card-ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/card-ui/Card";
import Image from "next/image";
import { Article } from "./ArticlesDashboard";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../services/api";
export interface ArticleWithCover extends Article {
  coverImage?: string;
  content?: string;
  author?: {
    username: string;
    fullname: string;
    lawyerPhoto: string;
  };
  created_at?: string;
  subtitle?: string;
}

export function ArticleCard({
  id,
  title,
  setArticles,
  router,
}: {
  id: number;
  title: string;
  content?: string;
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  router: AppRouterInstance;
}) {
  const [article, setArticle] = useState<ArticleWithCover | null>(null);

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
      console.error("DELETE ArticleCard:", err);
    }
  };

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await api.get(`/articles/${id}`);
      setArticle(res.data);
    };
    fetchArticle();
  }, [id]);

  return (
    <Card className="flex flex-col py-0 pb-6 m-w-[350px] overflow-hidden bg-white justify-between border border-gray-200">
      <div className="w-full">
        {article?.coverImage && (
          <div className="relative w-full h-64 mb-4">
            <Image
              width={600}
              height={600}
              src={article.coverImage}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-gray-900">{title}</CardTitle>
        <CardDescription className="flex grow">
          {article?.subtitle && (
            <div className="prose max-w-none">{article?.subtitle}</div>
          )}
        </CardDescription>
        <div className="flex items-center mt-2 space-x-2 grow justify-between">
          <div className="flex gap-3 items-center">
            <Avatar className="flex h-8 w-8">
              <AvatarImage
                src={article?.author?.lawyerPhoto}
                alt="Foto do advogado"
                className="object-cover object-top"
              />
            </Avatar>
            {article?.author && (
              <span className="text-sm text-gray-600">
                {article?.author?.fullname}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-gray-600" />
            {article?.created_at && (
              <span className="text-gray-600">
                {new Date(article.created_at).toLocaleDateString("pt-BR")}
              </span>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex gap-3 justify-start md:justify-start">
          <Button
            variant="outline"
            onClick={() => router.push(`/articles/${id}`)}
            className="flex items-center gap-1 hover:bg-gray-100 cursor-pointer hover:text-gray-900 duration-200"
          >
            <Pencil className="h-3 w-3" />
            Editar
          </Button>
          <Button
            onClick={() => handleDelete(id)}
            variant="outline"
            className="flex items-center gap-1 text-destructive hover:bg-red-50 hover:text-destructive cursor-pointer duration-200"
          >
            <Trash2 className="h-3 w-3" />
            Deletar
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex justify-start items-end md:justify-end">
        <Button className="flex items-center gap-2 cursor-pointer border border-gray-200 hover:bg-gray-100">
          Ver artigo
          <ArrowRight className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
}

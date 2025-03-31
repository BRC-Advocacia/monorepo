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
  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem("access_token");
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setArticles((articles) =>
        articles.filter((article) => article.id !== id)
      );
    } catch (err) {
      console.error("Erro ao deletar o artigo:", err);
    }
  };

  return (
    <Card className="flex flex-col py-0 pb-6 m-w-[350px] overflow-hidden bg-gray-950 justify-between border border-gray-800">
      <div className="w-full">
        <Image
          width={256}
          height={256}
          src="/socios/socios01.jpg"
          alt="Article cover"
          className="w-full h-[260px] object-cover object-top shadow-md shadow-gray-800 "
        />
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
          <span className="text-sm text-gray-700">@brcadvogados</span>
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

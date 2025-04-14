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
// import { useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import ImageExtension from "@tiptap/extension-image";
// import Table from "@tiptap/extension-table";
// import TableRow from "@tiptap/extension-table-row";
// import TableCell from "@tiptap/extension-table-cell";
// import TableHeader from "@tiptap/extension-table-header";
// import Link from "@tiptap/extension-link";
// import TextAlign from "@tiptap/extension-text-align";
// import Highlight from "@tiptap/extension-highlight";
// import TaskList from "@tiptap/extension-task-list";
// import TaskItem from "@tiptap/extension-task-item";

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

  // const editor = useEditor({
  //   immediatelyRender: false,
  //   extensions: [
  //     StarterKit.configure({
  //       heading: {
  //         levels: [1, 2, 3, 4],
  //       },
  //     }),
  //     ImageExtension.configure({
  //       allowBase64: true,
  //       HTMLAttributes: {
  //         class: "max-w-full h-auto rounded-lg",
  //       },
  //     }),
  //     Table.configure({
  //       resizable: true,
  //       HTMLAttributes: {
  //         class: "border-collapse table-auto w-full",
  //       },
  //     }),
  //     TableRow.configure({
  //       HTMLAttributes: {
  //         class: "border-b border-gray-200",
  //       },
  //     }),
  //     TableCell.configure({
  //       HTMLAttributes: {
  //         class: "border border-gray-200 p-2",
  //       },
  //     }),
  //     TableHeader.configure({
  //       HTMLAttributes: {
  //         class: "border border-gray-200 p-2 bg-gray-50 font-bold",
  //       },
  //     }),
  //     Link.configure({
  //       openOnClick: false,
  //       autolink: true,
  //       HTMLAttributes: {
  //         class: "text-blue-500 hover:text-blue-700 underline",
  //       },
  //     }),
  //     TextAlign.configure({
  //       types: ["heading", "paragraph"],
  //     }),
  //     Highlight,
  //     TaskList.configure({
  //       HTMLAttributes: {
  //         class: "list-none pl-0",
  //       },
  //     }),
  //     TaskItem.configure({
  //       HTMLAttributes: {
  //         class: "flex items-center gap-2",
  //       },
  //     }),
  //   ],
  //   content: article?.content || "",
  //   editable: false,
  //   editorProps: {
  //     attributes: {
  //       class:
  //         "prose prose-sm prose-violet-400 sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
  //     },
  //   },
  // });

  // useEffect(() => {
  //   if (editor && article?.content) {
  //     editor.commands.setContent(article.content);
  //   }
  // }, [editor, article?.content]);

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
          {/* {article?.content && ( */}
          {/* // <div className="prose max-w-none"> */}
          {/* <EditorContent editor={editor} /> */}
          {/* </div> */}
          {/* //   )} */}
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

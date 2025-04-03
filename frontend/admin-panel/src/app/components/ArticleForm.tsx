"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import TiptapEditor from "./TiptapEditor";

type ArticleInputs = {
  title: string;
  content: string;
};

interface ArticleFormProps {
  article?: {
    id: number;
    title: string;
    content: string;
  };
}

export default function ArticleForm({ article }: ArticleFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ArticleInputs>();
  const [error, setError] = useState("");
  const router = useRouter();
  const [editorContent, setEditorContent] = useState(article?.content || "");

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    console.log(content);
    setValue("content", content);
  };

  const onSubmit: SubmitHandler<ArticleInputs> = async (data) => {
    try {
      const token = localStorage.getItem("access_token");
      if (article) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/articles/${article.id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/articles`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      router.push("/dashboard");
    } catch (err) {
      if (
        axios.isAxiosError(err) &&
        err.response &&
        err.response.status === 401
      ) {
        router.push("/login");
      } else {
        console.error(
          "Erro ao carregar os artigos no painel administrativo ",
          err
        );
      }
      setError("Ocorreu um erro ao salvar o artigo.");
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">
        {article ? "Editar Artigo" : "Criar Artigo"}
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Título</label>
          <input
            {...register("title", { required: "Título é obrigatório" })}
            defaultValue={article?.title}
            className="w-full p-2 border rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Conteúdo</label>
          <TiptapEditor
            content={article?.content}
            onUpdate={handleEditorChange}
          />
          <input
            type="hidden"
            {...register("content", { required: "Conteúdo é obrigatório" })}
            value={editorContent}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Salvar Artigo
        </button>
      </form>
    </div>
  );
}

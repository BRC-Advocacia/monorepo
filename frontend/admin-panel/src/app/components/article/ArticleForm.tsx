"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import TiptapEditor from "../tiptap/TiptapEditor";
import ArticleCoverUpload from "./ArticleCoverUpload";

type ArticleInputs = {
  title: string;
  content: string;
  coverImage?: string;
  subtitle: string;
};

interface ArticleFormProps {
  article?: {
    id: number;
    title: string;
    content: string;
    coverImage?: string;
    subtitle?: string;
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

  const handleCoverUpload = (url: string) => {
    console.log(url);
    setValue("coverImage", url);
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
      }
      setError("Ocorreu um erro ao salvar o artigo.");
    }
  };
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-5xl mx-auto my-12 border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {article ? "Editar Artigo" : "Criar Artigo"}
      </h1>
      {error && (
        <p className="text-red-600 mb-4 bg-red-100 p-3 rounded">{error}</p>
      )}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Capa do artigo
      </label>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <ArticleCoverUpload
          initialImage={article?.coverImage}
          onImageUpload={handleCoverUpload}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Título
          </label>
          <input
            {...register("title", { required: "Título é obrigatório" })}
            defaultValue={article?.title}
            className="outline-none block w-full h-full p-3 rounded-md focus:ring-blue-500 focus:border-blue-500 text-zinc-800 text-4xl placeholder:text-zinc-400 border border-gray-300 font-[800]"
            placeholder="Título"
          />
          {errors.title && (
            <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subtítulo
          </label>
          <input
            {...register("subtitle", { required: "Subtítulo é obrigatório" })}
            defaultValue={article?.subtitle}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Digite o subtítulo do artigo"
          />
          {errors.subtitle && (
            <p className="text-red-600 text-sm mt-1">
              {errors.subtitle.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Conteúdo
          </label>
          <div className="border border-gray-300 rounded-md overflow-hidden">
            <TiptapEditor
              content={article?.content}
              onUpdate={handleEditorChange}
            />
          </div>
          <input
            type="hidden"
            {...register("content", { required: "Conteúdo é obrigatório" })}
            value={editorContent}
          />
          {errors.content && (
            <p className="text-red-600 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="hover:cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-md transition duration-150 ease-in-out"
        >
          {article ? "Salvar Alterações" : "Publicar Artigo"}
        </button>
      </form>
    </div>
  );
}

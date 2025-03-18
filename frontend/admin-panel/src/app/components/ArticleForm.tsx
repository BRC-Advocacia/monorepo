'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Console } from 'node:console';

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
  const { register, handleSubmit, formState: { errors } } = useForm<ArticleInputs>();
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit: SubmitHandler<ArticleInputs> = async (data) => {
    try {
      const token = localStorage.getItem('access_token');
      if (article) {
        // Editar artigo existente
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/articles/${article.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        // Criar novo artigo
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/articles`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      router.push('/dashboard'); // Redireciona para o dashboard após a submissão
    } catch (err) {
        if (axios.isAxiosError(err) && err.response && err.response.status === 401) {
          router.push('/login');
        } else {
          console.error("Erro ao carregar os artigos no painel administrativo ", err);
        }
      setError('Ocorreu um erro ao salvar o artigo.');
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">
        {article ? 'Editar Artigo' : 'Criar Artigo'}
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Título</label>
          <input
            type="text"
            defaultValue={article?.title}
            {...register('title', { required: 'O título é obrigatório.' })}
            className="w-full p-2 border rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Conteúdo</label>
          <textarea
            defaultValue={article?.content}
            {...register('content', { required: 'O conteúdo é obrigatório.' })}
            className="w-full p-2 border rounded"
            rows={6}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
          )}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Salvar
        </button>
      </form>
    </div>
  );
}

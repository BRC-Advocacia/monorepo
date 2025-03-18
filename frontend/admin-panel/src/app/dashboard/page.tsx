'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import ProtectedRoute from '../components/ProtectedRoute';

export default function DashboardPage() {
  interface Article {
    id: number;
    title: string;
    content: string;
  }

  const [articles, setArticles] = useState<Article[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          router.push('/login');
          return;
        }

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setArticles(response.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
            console.log("caiu")
          router.push('/login');
        } else {
          console.error("Erro ao carregar os artigos no painel administrativo ", error);
        }
      }
    };
    fetchArticles();
  }, [router]);

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem('access_token');
      console.log("tokennnn", token)
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setArticles(articles.filter((article) => article.id !== id)); // Remove o artigo da lista
    } catch (err) {
      console.error('Erro ao deletar o artigo:', err);
    }
  };
  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <Link
        href="/articles/new"
        className="bg-blue-500 text-white p-2 rounded mb-6 inline-block"
      >
        Criar Novo Artigo
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white p-6 rounded shadow-md relative hover:shadow-lg transition-shadow group"
          >
            <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href={`/articles/${article.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit size={20} />
              </Link>
              <button
                onClick={() => handleDelete(article.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={20} />
              </button>
            </div>
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700">{article.content}</p>
          </div>
        ))}
      </div>
        </div>
    </ProtectedRoute>
  );
}

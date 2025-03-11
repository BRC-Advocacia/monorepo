'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../components/ProtectedRoute';
import Link from 'next/link';


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
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setArticles(response.data);
      } catch {
        router.push('/login'); // Redireciona para o login se o token for inválido
      }
    };
    fetchArticles();
  }, [router]);

  return (
    <ProtectedRoute>
        <div className="min-h-screen bg-gray-100 p-8">
        <Link
        href="/articles/new"
        className="bg-blue-500 text-white p-2 rounded mb-6 inline-block"
      >
        Criar Novo Artigo
      </Link>
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-700">{article.content}</p>
            </div>
            ))}
        </div>

        </div>
    </ProtectedRoute>
  );
}

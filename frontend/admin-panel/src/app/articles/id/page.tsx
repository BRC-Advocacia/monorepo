'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import ArticleForm from '../../components/ArticleForm';

export default function EditArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/articles/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setArticle(response.data);
      } catch (err) {
        console.error('Erro ao buscar o artigo:', err);
      }
    };
    fetchArticle();
  }, [params.id]);

  if (!article) {
    return <div className="min-h-screen bg-gray-100 p-8">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ArticleForm article={article} />
    </div>
  );
}

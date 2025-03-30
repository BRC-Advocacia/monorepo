import { useEffect, useState } from 'react';
import api from '../services/api';

export default function ArticleList() {
  interface Article {
    id: number;
    title: string;
    content: string;
  }

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await api.get('/articles');
      setArticles(response.data);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

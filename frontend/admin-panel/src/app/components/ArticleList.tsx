import { useEffect, useState } from 'react';
import api from '../services/api';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

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

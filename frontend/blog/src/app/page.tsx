import { Metadata } from "next";
import api from "./services/api";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Blog | BRC Advocacia",
  description: "Artigos e notícias sobre direito e advocacia",
};

interface Article {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  coverImage: string;
  created_at: string;
  author: {
    fullname: string;
    lawyerPhoto: string;
  };
}

export default async function BlogPage() {
  const response = await api.get<Article[]>("/articles");
  const articles = response.data;

  return (
    <main className="min-h-screen bg-gray-5">
      <Header />
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/artigo/${article.id}`}>
                  <div className="relative h-48">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.subtitle}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(article.created_at).toLocaleDateString(
                            "pt-BR"
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>5 min de leitura</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden">
                        <Image
                          src={article.author.lawyerPhoto}
                          alt={article.author.fullname}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-600">
                        {article.author.fullname}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

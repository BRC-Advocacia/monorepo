import { Metadata } from "next";
import api from "./services/api";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";
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
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <main className="min-h-screen">
      <div className="bg-white">
        <Header />
        <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:-mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight">
                  {featuredArticle.title}
                </h1>
                <p className="text-lg text-gray-200">
                  {featuredArticle.subtitle}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>
                      {new Date(featuredArticle.created_at).toLocaleDateString(
                        "pt-BR"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>5 min de leitura</span>
                  </div>
                </div>
                <Link
                  href={`/artigo/${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 bg-white text-cyan-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Ler artigo
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-16 bg-white mt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  text-center">
            <div className="flex flex-col items-center mb-12">
                <div className="w-32 h-1 bg-blue-800 mb-4"></div>
                <h2 className="text-5xl font-bold text-blue-950">Artigos em Alta</h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {remainingArticles.map((article) => (
              <article key={article.id} className="group">
                <Link href={`/artigo/${article.id}`}>
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6 transform group-hover:scale-[1.02] transition-transform duration-300">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-800 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {article.subtitle}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(article.created_at).toLocaleDateString(
                              "pt-BR"
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>5 min de leitura</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={article.author.lawyerPhoto}
                          alt={article.author.fullname}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
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

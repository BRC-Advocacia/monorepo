import { Metadata } from "next";
import api from "../../services/api";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { notFound } from "next/navigation";

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

// metadata for the article page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const response = await api.get<Article>(`/articles/${resolvedParams.id}`);
    const article = response.data;

    return {
      title: `${article.title} | BRC Advocacia`,
      description: article.subtitle,
    };
  } catch {
    return {
      title: "Artigo não encontrado | BRC Advocacia",
    };
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const resolvedParams = await params;
    const response = await api.get<Article>(`/articles/${resolvedParams.id}`);
    const article = response.data;

    return (
      <main className="min-h-screen bg-gray-50">
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{article.subtitle}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(article.created_at).toLocaleDateString("pt-BR")}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 min de leitura</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
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
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-96 mb-12">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </section>
      </main>
    );
  } catch {
    notFound();
  }
}

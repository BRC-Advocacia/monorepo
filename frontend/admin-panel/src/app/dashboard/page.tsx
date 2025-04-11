import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";
import ArticlesDashboard from "@/app/components/article/ArticlesDashboard";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-950 p-8">
        <div className="flex flex-col items-start g-6 sm:flex-row sm:justify-between sm:items-center mb-6">
          <h1
            className={`mb-6 sm:mb-0 text-gray-200 text-4xl font-bold flex justify-between relative z-99 text-wrap after:content-[''] after:block after:mt-2 after:bg-[oklch(0.21_0.034_264.665)] after:w-full after:h-1/2 after:rounded after:absolute after:bottom-0 after:left-0 after:-z-[1] max-sm:after:h-full max-sm:after:w-[5%] max-sm:after:-left-2 max-sm:after:-bottom-0.5`}
          >
            Dashboard Articles
          </h1>
          <Link
            href="/articles/new"
            className="bg-transparent text-white p-2 rounded border border-gray-800"
          >
            <Plus width={24} height={24} />
          </Link>
        </div>

        <ArticlesDashboard />
      </div>
    </ProtectedRoute>
  );
}

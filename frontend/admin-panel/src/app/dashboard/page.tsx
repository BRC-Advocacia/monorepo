import Link from "next/link";
import styles from "./page.module.css";
import ProtectedRoute from "../components/ProtectedRoute";
import ArticlesDashboard from "../components/ArticlesDashboard";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-950 p-8">
        <div className="flex flex-col items-start g-6 sm:flex-row sm:justify-between sm:items-center mb-6">
          <h1
            className={`mb-6 sm:mb-0 text-gray-200 text-4xl font-bold flex justify-between relative ${styles.dashboardH1} z-99 text-wrap`}
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

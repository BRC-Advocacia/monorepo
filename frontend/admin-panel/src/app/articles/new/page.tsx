import ProtectedRoute from "@/app/components/ProtectedRoute";
import ArticleForm from "@/app/components/article/ArticleForm";

export default function NewArticlePage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-8">
        <ArticleForm />
      </div>
    </ProtectedRoute>
  );
}

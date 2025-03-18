import ProtectedRoute from '@/app/components/ProtectedRoute';
import ArticleForm from '../../components/ArticleForm';

export default function NewArticlePage() {
  return (
    <ProtectedRoute>
        <div className="min-h-screen bg-gray-100 p-8">
        <ArticleForm />
        </div>
    </ProtectedRoute>
  );
}

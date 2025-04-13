import ProtectedRoute from "@/app/components/routes/ProtectedRoute";
import ArticleForm from "@/app/components/article/ArticleForm";
import { Button } from "@/app/components/card-ui/Button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewArticlePage() {
  const router = useRouter();
  
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-8">
        <div>
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 hover:bg-gray-100 hover:cursor-pointer mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Dashboard
          </Button>
        </div>
        <ArticleForm />
      </div>
    </ProtectedRoute>
  );
}

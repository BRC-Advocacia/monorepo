import React from "react";

interface ArticleContentProps {
  content: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-strong:text-gray-900 prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

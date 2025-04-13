"use client";

import { useState, useRef, ChangeEvent, useEffect } from "react";
import axios from "axios";

interface ArticleCoverUploadProps {
  initialImage?: string;
  onImageUpload: (url: string) => void;
}

export default function ArticleCoverUpload({
  initialImage,
  onImageUpload,
}: ArticleCoverUploadProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialImage) {
      setImagePreview(initialImage);
    }
  }, [initialImage]);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    try {
      const formData = new FormData();
      formData.append("cover", file);

      const token = localStorage.getItem("access_token");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload response:", response);
      onImageUpload(response.data.url);
      setImagePreview(response.data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
      setImagePreview(null);
      setError("Falha ao enviar a imagem.");
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setImagePreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onImageUpload("");
  };

  return (
    <div className="mb-6">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      {imagePreview ? (
        <div className="relative group">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <img
              src={imagePreview}
              alt="Capa do artigo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-20 transition-opacity flex items-center justify-center">
            <button
              type="button"
              onClick={triggerFileInput}
              className="bg-white text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-100"
              disabled={isUploading}
            >
              Alterar
            </button>
            <button
              type="button"
              onClick={removeImage}
              className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100"
              disabled={isUploading}
            >
              Remover
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={triggerFileInput}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
        >
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-lg font-medium text-gray-700">
              Adicionar uma capa
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Recomendado: 1200x630 pixels
            </p>
            {isUploading && (
              <p className="text-sm text-blue-500 mt-2">Enviando imagem...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

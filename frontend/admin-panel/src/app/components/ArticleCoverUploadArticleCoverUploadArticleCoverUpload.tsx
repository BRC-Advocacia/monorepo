"use client";

import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import axios from "axios";

interface ArticleCoverUploadProps {
  initialImage?: string;
  onImageUpload: (url: string) => void;
}

export default function ArticleCoverUpload({
  initialImage,
  onImageUpload,
}: ArticleCoverUploadProps) {
  const [image, setImage] = useState<string | null>(initialImage || null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      // Primeiro, converta a imagem para base64 para pré-visualização
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);

      // Envie a imagem para o servidor
      const formData = new FormData();
      formData.append("cover", file);

      const token = localStorage.getItem("access_token");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      onImageUpload(response.data.url);
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setImage(null);
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

      {image ? (
        <div className="relative group">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt="Capa do artigo"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              type="button"
              onClick={triggerFileInput}
              className="bg-white text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-100"
            >
              Alterar
            </button>
            <button
              type="button"
              onClick={removeImage}
              className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100"
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
}"use client";

import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import axios from "axios";

interface ArticleCoverUploadProps {
  initialImage?: string;
  onImageUpload: (url: string) => void;
}

export default function ArticleCoverUpload({
  initialImage,
  onImageUpload,
}: ArticleCoverUploadProps) {
  const [image, setImage] = useState<string | null>(initialImage || null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      // Primeiro, converta a imagem para base64 para pré-visualização
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);

      // Envie a imagem para o servidor
      const formData = new FormData();
      formData.append("cover", file);

      const token = localStorage.getItem("access_token");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      onImageUpload(response.data.url);
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setImage(null);
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

      {image ? (
        <div className="relative group">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt="Capa do artigo"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              type="button"
              onClick={triggerFileInput}
              className="bg-white text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-100"
            >
              Alterar
            </button>
            <button
              type="button"
              onClick={removeImage}
              className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100"
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

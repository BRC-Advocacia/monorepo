"use client";

import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  Image as ImageIcon,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Highlighter,
} from "lucide-react";
import axios from "axios";

interface EditorToolbarProps {
  editor: Editor | null;
}
export default function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) return null;


  const uploadImageToCloudinary = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

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

      return response.data.url;
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      throw new Error("Falha ao fazer upload da imagem");
    }
  };

  return (
    <div className="flex flex-wrap gap-2 p-2 bg-transparent rounded-t-lg w-full justify-center border-b border-b-zinc-300">
      <div className="text-zinc-50 flex flex-wrap justify-center border bg-zinc-700 border-zinc-800/50 p-2 rounded-4xl shadow-2xs shadow-violet-800/20">
        <div className="flex items-center gap-1 border-r pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("bold")
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Negrito"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("italic")
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Itálico"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("highlight")
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Destacar"
          >
            <Highlighter className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 border-r pr-2">
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("heading", { level: 1 })
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Título 1"
          >
            <Heading1 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("heading", { level: 2 })
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Título 2"
          >
            <Heading2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("heading", { level: 3 })
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Título 3"
          >
            <Heading3 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 border-r pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("bulletList")
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Lista com marcadores"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("orderedList")
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Lista numerada"
          >
            <ListOrdered className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 border-r pr-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive({ textAlign: "left" })
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Alinhar à esquerda"
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive({ textAlign: "center" })
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Centralizar"
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive({ textAlign: "right" })
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Alinhar à direita"
          >
            <AlignRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("blockquote")
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Citação"
          >
            <Quote className="w-4 h-4" />
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              e.stopPropagation();
              const file = e.target.files?.[0];
              if (file) {
                try {
                  const url = await uploadImageToCloudinary(file);
                  editor.chain().focus().setImage({ src: url }).run();
                } catch (error) {
                  console.error("Erro ao fazer upload da imagem:", error);
                  alert("Erro ao fazer upload da imagem. Por favor, tente novamente.");
                }
              }
            }}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="p-2 rounded hover:text-zinc-700 cursor-pointer hover:bg-gray-200"
            title="Inserir imagem"
          >
            <ImageIcon className="w-4 h-4" />
          </label>
        </div>
      </div>
    </div>
  );
}

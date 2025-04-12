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
  CheckSquare,
  Highlighter,
} from "lucide-react";

interface EditorToolbarProps {
  editor: Editor | null;
}
// NOTE:
// O processo atual é:
// A imagem é convertida para base64 usando FileReader
// O base64 é inserido diretamente no conteúdo do editor
// A imagem é salva junto com o conteúdo do artigo no banco de dados
// Isso tem algumas desvantagens:
// O base64 aumenta significativamente o tamanho do conteúdo
// Não há otimização de imagens
// As imagens não são reutilizáveis
// O banco de dados fica mais pesado
export default function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Digite a URL do link:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
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
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("taskList")
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Lista de tarefas"
          >
            <CheckSquare className="w-4 h-4" />
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
          <button
            type="button"
            onClick={addLink}
            className={`p-2 rounded hover:text-zinc-700 cursor-pointer ${
              editor.isActive("link")
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-200"
            }`}
            title="Adicionar link"
          >
            <LinkIcon className="w-4 h-4" />
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              e.stopPropagation();
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  editor
                    .chain()
                    .focus()
                    .setImage({ src: reader.result as string })
                    .run();
                };
                reader.readAsDataURL(file);
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

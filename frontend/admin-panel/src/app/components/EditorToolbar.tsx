'use client';

import { Editor } from '@tiptap/react';

interface EditorToolbarProps {
  editor: Editor | null;
}

export default function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b bg-gray-50 rounded-t-lg">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 ${editor.isActive('bold') ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
      >
        Negrito
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 ${editor.isActive('italic') ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
      >
        Itálico
      </button>

      <select
        onChange={(e) => {
          e.stopPropagation(); // (https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
          editor.chain().focus().toggleHeading({ level: parseInt(e.target.value) as any }).run();
        }}
        className="p-2"
      >
        <option value="">Título</option>
        <option value="1">Título 1</option>
        <option value="2">Título 2</option>
        <option value="3">Título 3</option>
      </select>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          e.stopPropagation();
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              editor.chain().focus().setImage({ src: reader.result as string }).run();
            };
            reader.readAsDataURL(file);
          }
        }}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="p-2 hover:bg-gray-200 cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        Inserir Imagem
      </label>
    </div>
  );
}

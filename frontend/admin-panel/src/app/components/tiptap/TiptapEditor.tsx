"use client";
import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import EditorToolbar from "../toolbar/EditorToolbar";

interface TiptapEditorProps {
  content?: string;
  onUpdate: (content: string) => void;
}

export default function TiptapEditor({ content, onUpdate }: TiptapEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg",
        },
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: "border-collapse table-auto w-full",
        },
      }),
      Placeholder.configure({
        placeholder: "Escreva '/' para abrir o menu...",
      }),
      TableRow.configure({
        HTMLAttributes: {
          class: "border-b border-gray-200",
        },
      }),
      TableCell.configure({
        HTMLAttributes: {
          class: "border border-gray-200 p-2",
        },
      }),
      TableHeader.configure({
        HTMLAttributes: {
          class: "border border-gray-200 p-2 bg-gray-50 font-bold",
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-blue-500 hover:text-blue-700 underline",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      TaskList.configure({
        HTMLAttributes: {
          class: "list-none pl-0",
        },
      }),
      TaskItem.configure({
        HTMLAttributes: {
          class: "flex items-center gap-2",
        },
      }),
    ],
    content: content || "",
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-violet-400 sm:prose focus:outline-none leading-none w-full max-w-[800px] prose-h1:my-0 prose-h1:py-0 prose-h2:my-0 prose-h2:py-0 prose-h3:my-0 prose-h3:py-0 prose-img:self-center",
      },
    },
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <div className="rounded-lg bg-white">
      <EditorToolbar editor={editor} />
      <EditorContent
        className="p-4 min-h-[300px] max-w-full overflow-y-auto flex justify-center mx-auto"
        editor={editor}
      />
    </div>
  );
}

'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Link from '@tiptap/extension-link';
import { useEffect } from 'react';
import EditorToolbar from './EditorToolbar';

interface TiptapEditorProps {
  content?: string;
  onUpdate: (content: string) => void;
}

export default function TiptapEditor({ content, onUpdate }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
    ],
    content: content || '<p>Comece a escrever seu artigo...</p>',
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <div className="border rounded-lg">
    <EditorToolbar editor={editor} />
    <EditorContent editor={editor} className="p-4 min-h-[300px]" />
  </div>
  );
}

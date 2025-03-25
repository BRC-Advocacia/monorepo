'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { EditorState } from 'lexical';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { EditorToolbar } from './EditorToolbar';

const theme = {
  heading: {
    h1: 'text-2xl font-bold',
    h2: 'text-xl font-semibold',
    h3: 'text-lg font-medium'
  },
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline'
  }
};

function onError(error: Error) {
  console.error(error);
}

export default function LexicalEditor({ initialContent, onChange }: {
  initialContent?: string;
  onChange: (content: string) => void;
}) {
  const initialConfig = {
    namespace: 'ArticleEditor',
    theme,
    onError,
    nodes: [
      HeadingNode,
      QuoteNode,
      ListNode,
      ListItemNode,
      LinkNode
    ]
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <EditorToolbar />
      <div className="editor-container border rounded-lg p-4">
        <RichTextPlugin
          contentEditable={<ContentEditable className="min-h-[300px] outline-none" />}
          placeholder={<div className="text-gray-400">Digite seu artigo aqui...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={(editorState: EditorState) => {
          onChange(JSON.stringify(editorState.toJSON()));
        }} />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <ListPlugin />
        <LinkPlugin />
      </div>
    </LexicalComposer>
  );
}

'use client';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, LexicalNode, TextFormatType, TextNode } from 'lexical';
import { $createHeadingNode } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';

export function EditorToolbar() {
    const [editor] = useLexicalComposerContext();

    const formatText = (command: TextFormatType) => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
    };

    const formatHeading = (level: number) => {
        editor.update(() => {
            const selection = $getSelection();
                $setBlocksType(selection, () => $createHeadingNode(`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'));
                $wrapNodes(selection, () => $createHeadingNode(`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'));
        });
    }

    return (
        <div className="flex gap-2 mb-2 p-2 bg-gray-100 rounded-t-lg">
            <button onClick={() => formatText('bold')} className="p-1 hover:bg-gray-200 rounded">
                <strong>B</strong>
            </button>
            <button onClick={() => formatText('italic')} className="p-1 hover:bg-gray-200 rounded">
                <em>I</em>
            </button>
            <button onClick={() => formatHeading(1)} className="p-1 hover:bg-gray-200 rounded">
                Título 1
            </button>
            <button onClick={() => formatHeading(2)} className="p-1 hover:bg-gray-200 rounded">
                Título 2
            </button>
        </div>
    );
}
function $wrapNodes(selection: import("lexical").BaseSelection | null, createNode: () => import("@lexical/rich-text").HeadingNode) {
        if (selection && $isRangeSelection(selection)) {
                const nodes = selection.getNodes();
                nodes.forEach((node) => {
                        if ($isTextNode(node)) {
                                const wrapper = createNode();
                                node.getParent()?.insertBefore(wrapper);
                                wrapper.append(node);
                        }
                });
        }
}
function $isTextNode(node: LexicalNode): node is TextNode {
        return node instanceof TextNode;
}

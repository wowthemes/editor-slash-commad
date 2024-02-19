import { Editor } from '@tiptap/core';

export interface Item {
  title: string;
  command: ({ editor, range }: { editor: Editor, range: any }) => void;
}

export interface SuggestionProps {
  query: string;
}

export interface StartEndProps {
  editor: Editor;
  clientRect: Function;
  event: KeyboardEvent;
}

export interface Helpers {
  target: Ref<string>,
  unit: Ref<string>;
  customUnit: Ref<string>;
  targetUnit: Ref<string>;
  hasPlaceholder: Function;
}
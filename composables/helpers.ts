import { useEditor } from "@tiptap/vue-3";
import StarterKit from '@tiptap/starter-kit';
const suggestion = useSuggestion();

export const useForm = () => {
  const target = useState<number>('target');
  const deadline = useState<number>('deadline');
  const unit = useState<string>('unit', () => '%');
  const customUnit = useState<string>('customUnit', () => '$');
  const targetUnit = computed(() => (unit.value !== '%' ? (customUnit.value || '$') : unit.value));

  return {
    target,
    unit,
    customUnit,
    targetUnit,
    deadline,
  }
}

export const useHelpers = () => {
  const { target, targetUnit, deadline } = useForm();
  const editor = useState('editor', <Editor>() => {
    return useEditor({
      extensions: [
        StarterKit,
        useTiptapCommands().configure({
          suggestion,
        }),
        targetValue,
        deadlineNode
      ],
      content: `
        <div>
          <p>Type a slash</p>
        </div>
      `
    })
  });

  const hasPlaceholder = (placeholder: string): boolean => {
    if (editor.value) {
      const html = editor.value.getHTML();
      if (html) {
        return html.includes(`data-type="${placeholder}"`);
      }
    }
    return false;
  }

  const insertPlaceholder = (placeholder: string): void => {
    if (editor.value) {
      editor.value.chain()
        .focus()
        .insertContent(`<span data-type="${placeholder}"></span> `)
        .run()
    }
  }

  const previewEditor = () => {
    return editor.value?.getHTML()
            .replace('<span data-type="target-value"></span>', `${target.value} ${targetUnit.value}`)
            .replace('<span data-type="deadline-node"></span>', `${deadline.value}`);
  }

  return {
    editor,
    hasPlaceholder,
    insertPlaceholder,
    previewEditor,
  }
}
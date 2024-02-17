// suggestion.ts
import { VueRenderer } from '@tiptap/vue-3'
import tippy from 'tippy.js'

// import { TargetValueNode, DeadlineDateNode } from '../utils/tiptapNodes';

import CommandsList from '@/components/CommandList.vue'
// import ViewComponent from '@/components/ViewComponent.vue'

const suggestion = {
  items: ({ query }: { query: string }) => {
    return [
      {
        title: 'Target Value',
        command: ({ editor, range }: { editor: any, range: any }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            // .setNode('targetValue')
            .insertContent('<span data-type="target-value"></span>')
            .run()
        },
      },
      {
        title: 'Deadline Date',
        command: ({ editor, range }: { editor: any, range: any }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .insertContent('<span data-type="deadline-node"></span>')
            .run()
        },
      },
    ].filter(item => item.title.toLowerCase().startsWith(query.toLowerCase())).slice(0, 10)
  },

  render: () => {
    let component: any
    let popup: any

    return {
      onStart: (props: any) => {
        component = new VueRenderer(CommandsList, {
          props,
          editor: props.editor,
        })

        if (!props.clientRect) {
          return
        }

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        })
      },

      onUpdate: (props: any) => {
        component.updateProps(props)
        console.log(props);
        if (!props.clientRect) {
          return
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        })
      },

      onKeyDown: (props: any) => {
        if (props.event.key === 'Escape') {
          popup[0].hide()

          return true
        }
        return component?.ref?.onKeyDown(props)
      },

      onExit: () => {
        popup[0].destroy()
        component.destroy()
      },
    }
  },
}

export const useSuggestion = () => {
  return suggestion
}
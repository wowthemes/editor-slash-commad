// suggestion.ts
import { VueRenderer } from '@tiptap/vue-3'
import tippy from 'tippy.js'
import CommandsList from '@/components/CommandList.vue'

import { type Item, type SuggestionProps, type StartEndProps } from '~/utils/types';


const suggestion = {
  items: ({ query }: SuggestionProps): Item[] => {
    return [
      {
        title: 'Target Value',
        command: ({ editor, range }: { editor: any, range: any }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .insertContent('<span data-type="target-value"></span> ')
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
            .insertContent('<span data-type="deadline-node"></span> ')
            .run()
        },
      },
    ].filter(item => item.title.toLowerCase().includes(query.toLowerCase())).slice(0, 10)
  },

  render: () => {
    let component: any
    let popup: any

    return {
      onStart: (props: StartEndProps) => {
        component = new VueRenderer(CommandsList, {
          props,
          editor: props.editor,
        })

        if (!props.clientRect) {
          return
        }

        popup = tippy('body', {
          getReferenceClientRect: () => props.clientRect()  || new DOMRect(),
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        })
      },

      onUpdate: (props: StartEndProps) => {
        component.updateProps(props)
        if (!props.clientRect) {
          return
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        })
      },

      onKeyDown: (props: {event: KeyboardEvent}) => {
        if (props.event.key === 'Escape') {
          popup[0].hide()

          return true
        }
        return component?.ref?.onKeyDown(props.event)
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
import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import Component from '../components/DeadlineView.vue'

export default Node.create({
  name: 'deadlineNode',

  group: 'inline',
  inline: true,
  // content: 'inline*',
  draggable: true,

  parseHTML() {
    return [
      {
        tag: 'span[data-type="deadline-node"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes, { 'data-type': 'deadline-node' })]
  },

  addNodeView() {
    return VueNodeViewRenderer(Component)
  },
})
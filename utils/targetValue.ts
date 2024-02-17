import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import Component from '../components/TargetValue.vue'

export default Node.create({
  name: 'targetValue',
  group: 'inline',
  inline: true,
  // content: 'inline*',
  draggable: true,

  parseHTML() {
    return [
      {
        tag: 'span[data-type="target-value"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes, { 'data-type': 'target-value' })]
  },

  addNodeView() {
    return VueNodeViewRenderer(Component)
  },
})
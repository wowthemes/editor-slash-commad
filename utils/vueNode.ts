import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import Component from '../components/ViewComponent.vue'

export default Node.create({
  name: 'vueComponent',

  group: 'block',
  
  // content: 'inline*',
  draggable: true,

  parseHTML() {
    return [
      {
        tag: 'vue-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['vue-component', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return VueNodeViewRenderer(Component)
  },
})
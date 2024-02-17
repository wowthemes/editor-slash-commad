
import { Node } from '@tiptap/core'

// Define custom node types
const TargetValueNode = Node.create({
  name: 'targetValue',
  group: 'inline',
  inline: true,
  atom: true,

  renderHTML({ node }) {
    return ['target-value', node.attrs, 0]
  },
})

const DeadlineDateNode = Node.create({
  name: 'deadlineDate',
  group: 'inline',
  inline: true,
  atom: true,

  renderHTML({ node }) {
    return ['deadlineDate', node.attrs, 0]
  },
})

export {
  TargetValueNode,
  DeadlineDateNode,
}
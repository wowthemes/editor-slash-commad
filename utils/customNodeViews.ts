import { NodeView, EditorView } from '@tiptap/core'

export class TargetValueNodeView implements NodeView {
  constructor(public node: any, public view: EditorView, public getPos: () => number) {}

  dom = document.createElement('target-value')

  contentDOM = document.createElement('span')

  update(node: any) {
    return node.type.name === this.node.type.name
  }

  ignoreMutation() {
    return true
  }
}

export class DeadlineDateNodeView implements NodeView {
  constructor(public node: any, public view: EditorView, public getPos: () => number) {}

  dom = document.createElement('deadline-date')

  contentDOM = document.createElement('span')

  update(node: any) {
    return node.type.name === this.node.type.name
  }

  ignoreMutation() {
    return true
  }
}

<!-- index.vue -->
<template>
  <div class="max-w-[40%] mx-auto h-screen pt-12">
    <div v-if="editor">
      <div class="text-right mb-3">
        <button v-if="!hasTarget" class="mx-2 border px-6 rounded-lg" @click="insertPlaceholder('target-value')">+ Insert Target</button>
        <button v-if="!hasDeadline" class="mx-2 border px-6 rounded-lg" @click="insertPlaceholder('deadline-node')">Insert Deadline</button>
      </div>
      <div class="bg-gray-100 px-5 py-3">
        <EditorContent class="focus:outline-0" :editor="editor" />
      </div>

      <div v-if="hasTarget" class="flex gap-4 mt-3">
        <label for=""><input type="radio" value="%" v-model="unit"> %</label>
        <label for=""><input type="radio" value="custom" v-model="unit"> Custom</label>
        <input v-if="unit === 'custom'" type="text" v-model="customUnit" class="w-10 bg-gray-50 border border-gray-100" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent, useEditor } from '@tiptap/vue-3'

// import { TargetValueNodeView, DeadlineDateNodeView } from '@/utils/customNodeViews'
// import targetValue from '../utils/targetValue';
// import deadlineNode from '#imports';
// deadlineNode
const suggestion = useSuggestion();
const Commands = useTiptapCommands();
const editor = ref(null)
const hasTarget = computed(() => hasPlaceholder('target-value'));
const hasDeadline = computed(() => hasPlaceholder('deadline-node'));
const unit = ref('%')
const customUnit = ref('$');

onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit,
      Commands.configure({
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
})

const hasPlaceholder = (placeholder) => {
  if(editor.value) {
    const html = editor.value?.getHTML();
    if (html) {
      return html.includes(`data-type="${placeholder}"`);
    }

    return false;
  }
}

const insertPlaceholder = (placeholder) => {
  editor.value.chain()
            .focus()
            .insertContent(`<span data-type="${placeholder}"></span>`)
            .run()
}

onBeforeUnmount(() => {
  editor.value.destroy()
})
</script>

<style lang="scss">
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }
}

.mention {
  border: 1px solid #000;
  border-radius: 0.4rem;
  padding: 0.1rem 0.3rem;
  box-decoration-break: clone;
}
.tiptap.ProseMirror:focus {
  outline: none;
}
</style>
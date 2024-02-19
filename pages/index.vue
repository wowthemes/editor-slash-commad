<script setup lang="ts">

import { EditorContent } from '@tiptap/vue-3'

useHead({
  title: 'Tiptap Editor',
})

const { unit, customUnit } = useForm();
const { hasPlaceholder, editor, insertPlaceholder, previewEditor } = useHelpers();

const hasTarget = computed(() => hasPlaceholder('target-value'));
const hasDeadline = computed(() => hasPlaceholder('deadline-node'));
const editMode = ref(true);

const setEditMode = (e: FocusEvent) => {
  if (! e.relatedTarget) {
    editMode.value = false;
  }
}
</script>


<template>
  <div class="max-w-[40%] mx-auto h-screen pt-12">
    <div v-if="editor">
      <div v-if="!editMode" class="bg-gray-100 px-5 py-3">
        <div @click="editMode = true" v-html="previewEditor()"></div>
      </div>
      <div v-else>
        <div @focusout="setEditMode($event)">
          <div class="text-right mb-3">
            <button v-if="!hasTarget" class="mx-2 border px-6 rounded-lg" @click="insertPlaceholder('target-value')">+
              Insert Target</button>
            <button v-if="!hasDeadline" class="mx-2 border px-6 rounded-lg"
              @click="insertPlaceholder('deadline-node')">Insert Deadline</button>
          </div>
          <div class="bg-gray-100 px-5 py-3">
            <EditorContent class="focus:outline-0" :editor="editor" />
          </div>

          <div v-if="hasTarget" class="flex gap-4 mt-3">
            <label for="tiptapeditor_target-value-percet"><input id="tiptapeditor_target-value-percet" type="radio"
                name="unit" value="%" v-model="unit" /> %</label>
            <label for="tiptapeditor_target-value-custom"><input id="tiptapeditor_target-value-custom" type="radio"
                name="unit" value="custom" v-model="unit" /> Custom</label>
            <input v-if="unit === 'custom'" type="text" v-model="customUnit"
              class="w-10 bg-gray-50 border border-gray-100" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tiptap {
  >*+* {
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
}</style>
<template>
  
  <node-view-wrapper class="vue-component inline-block">
    <div contenteditable="false" draggable="true" data-drag-handle>x</div>
    <div  class="relative w-32 border rounded-md mx-2">
      <input type="date" v-mode="field" class="block w-full py-1 pl-3 pr-3 focus:outline-none bg-gray-50" placeholder="Fill">
    </div>

    <node-view-content class="content" />
  </node-view-wrapper>
  
</template>

<script setup>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
const props = defineProps(nodeViewProps);

const field = ref();
</script>

<style scoped>
div[data-drag-handle] {
  position: absolute;
}
</style>
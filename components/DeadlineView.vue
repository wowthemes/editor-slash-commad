<script setup lang="ts">
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
const props = defineProps(nodeViewProps);
const { deadline } = useForm();

const field = ref();
</script>

<template>
  <node-view-wrapper class="deadline-node inline-flex items-center relative">
    <div class="drag-handle" contenteditable="false" draggable="true" data-drag-handle />
    <div  class="relative w-32 border rounded-md mx-2">
      <input type="date" v-model="deadline" class="block w-full py-1 pl-3 pr-3 focus:outline-none bg-gray-50" placeholder="Fill">
    </div>

    <node-view-content class="content" />
  </node-view-wrapper>
</template>

<style scoped>
.deadline-node .drag-handle {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  width: 1rem;
  height: 1rem;
  left: 0px;
  cursor: grab;
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"><path fill-opacity="0.2" d="M4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 10;
  transition: all .3s;
}
.deadline-node:hover .drag-handle {
  visibility: visible;
  opacity: 1;
  transition: all .3s;
}
</style>
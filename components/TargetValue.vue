
<script setup lang="ts">
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
const props = defineProps(nodeViewProps);
const { targetUnit, target } = useForm();
const field = ref();
</script>

<template>
  <node-view-wrapper class="target-value inline-flex ml-2 items-center relative">
    <div class="drag-handle" contenteditable="false" draggable="true" data-drag-handle />
    <span class="relative w-20 border rounded-md inline-block">
      <input type="text" v-model="target" class="block w-full py-1 pl-6 pr-6 focus:outline-none bg-gray-50" placeholder="Fill">
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-white">
        <span class="text-gray-500">{{ targetUnit }}</span>
      </span>
    </span>
    <node-view-content class="content" />
  </node-view-wrapper>
</template>


<style scoped>

.target-value .drag-handle {
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
.target-value:hover .drag-handle {
  visibility: visible;
  opacity: 1;
  transition: all .3s;
}
</style>


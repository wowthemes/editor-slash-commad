<template>
  <node-view-wrapper class="vue-component inline-block">
    <span class="relative w-20 border rounded-md inline-block">
      <input type="text" v-mode="field" class="block w-full py-1 pl-3 pr-6 focus:outline-none bg-gray-100" placeholder="Fill">
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-white">
        <span class="text-gray-500">$</span>
      </span>
    </span>
  </node-view-wrapper>
</template>

<script setup>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
const props = defineProps(nodeViewProps);

const field = ref();
</script>

<style scoped>
/* Style the custom node views as needed */
</style>
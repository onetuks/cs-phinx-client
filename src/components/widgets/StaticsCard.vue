<script setup lang="ts">
defineProps<{
  title: String;
  content: String;
}>();
</script>

<template>
  <div
    class="bg-white border-gray-200 rounded-lg w-56 h-72 items-center flex flex-col justify-between py-20 shadow-lg"
  >
    <h1 class="text-3xl">{{ title }}</h1>
    <h3 class="text-2xl text-primary">{{ content }}</h3>
  </div>
</template>

<style scoped></style>

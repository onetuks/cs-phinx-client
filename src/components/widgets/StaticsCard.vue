<script lang="ts" setup>
defineProps<{
  title: String;
  content: String;
}>();
</script>

<template>
  <div
    class="bg-white border-gray-200 rounded-lg w-56 h-72 items-center flex flex-col justify-between py-20 shadow-lg"
  >
    <h2>{{ title }}</h2>
    <h3>{{ content }}</h3>
  </div>
</template>

<style scoped></style>

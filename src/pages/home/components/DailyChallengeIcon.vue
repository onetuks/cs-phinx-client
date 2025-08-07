<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps<{
  name: string;
  isCompleted: boolean;
}>();

function getIcon(name: string): string {
  if (name.startsWith("파피루스")) {
    return "fa-solid fa-scroll";
  } else if (name.startsWith("코덱스")) {
    return "fa-solid fa-book";
  } else {
    return "fa-solid fa-paw";
  }
}
</script>

<template>
  <div>
    <div
      :class="{
        'border-gray-200': !isCompleted,
        'border-green-300': isCompleted,
      }"
      class="rounded-full border-4 p-10"
    >
      <font-awesome-icon
        :class="{
          'text-gray-200': !isCompleted,
          'text-green-300': isCompleted,
        }"
        :icon="getIcon(name)"
        class="text-7xl"
      />
    </div>
    <p
      :class="{
        'text-primary': isCompleted,
        'text-gray-200': !isCompleted,
      }"
      class="mt-5 font-bold text-lg"
    >
      {{ name }}
    </p>
  </div>
</template>

<style scoped></style>

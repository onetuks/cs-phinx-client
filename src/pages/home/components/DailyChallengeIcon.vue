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

function setColor(isCompleted: boolean) {
  if (isCompleted) {
    return "border-green-300 text-green-300";
  }
  return "border-gray-200 text-gray-200";
}
</script>

<template>
  <div>
    <div
      :class="setColor(isCompleted)"
      class="rounded-full border-4 py-10 px-8 mb-5"
    >
      <font-awesome-icon
        :class="setColor(isCompleted)"
        :icon="getIcon(name)"
        class="text-7xl"
      />
    </div>
    <h4
      :class="{
        'text-primary': isCompleted,
        'text-gray-200': !isCompleted,
      }"
    >
      {{ name }}
    </h4>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ClickButtonType } from "@/types/WorkBook";

const props = defineProps<{
  clickButtonType: ClickButtonType;
}>();
const emits = defineEmits<{
  (event: "click-button", clickButtonType: ClickButtonType): void;
}>();

const clickButton = (): void => {
  emits("click-button", props.clickButtonType);
};
</script>

<template>
  <button
    @click="clickButton"
    class="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
  >
    {{ clickButtonType }}
  </button>
</template>

<style scoped></style>

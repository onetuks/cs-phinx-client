<script lang="ts" setup>
import {ClickButtonType} from "@/types/Workbook";

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
  <button @click="clickButton">
    {{ clickButtonType }}
  </button>
</template>

<style scoped></style>

<script lang="ts" setup>
import { Workbook } from "@/types/WorkBook";

defineProps<{
  workbook: Workbook;
}>();
</script>

<template>
  <div class="flex flex-col flex-grow bg-white rounded-lg">
    <WorkbookCardImageView />
    <WorkbookCardInfoView :workbook="workbook" />
  </div>
</template>

<style scoped></style>

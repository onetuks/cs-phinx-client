<script lang="ts" setup>
import { Workbook } from "@/types/Workbook";

/** TODO (사용자 개념 도입 시)
 * 1. 해결여부
 * 2. 해결한 유저 수
 * 3. 주요 topic
 */

defineProps<{
  workbook: Workbook;
}>();
</script>

<template>
  <div class="flex flex-col flex-grow p-5 pb-8 text-left">
    <h1 class="text-2xl mb-3" v-text="workbook.title"></h1>
    <p v-text="`${workbook.includedProblems.length} 문제`" />
  </div>
</template>

<style scoped></style>

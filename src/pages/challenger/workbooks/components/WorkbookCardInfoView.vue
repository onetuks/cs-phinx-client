<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Workbook } from "@/types/WorkBook";

/** TODO
 * 1. 제목
 * 2. 컬렉션 타입
 * 3. 포함 문제 수
 * 4. 해결 여부 (사용자 개념 도입되면)
 */

defineProps<{
  workbook: Workbook;
}>();
</script>

<template>
  <div class="flex flex-col flex-grow">
    <div v-text="workbook.collectionType" />
    <font-awesome-icon v-if="true" :icon="['fas', 'check-to-slot']" />
    <h1 v-text="workbook.title" />
    <p v-text="workbook.includedProblems.length" />
  </div>
</template>

<style scoped></style>

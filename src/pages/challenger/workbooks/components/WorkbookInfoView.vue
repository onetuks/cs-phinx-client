<script lang="ts" setup>
import { CollectionType, Workbook } from "@/types/Workbook";

defineProps<{
  workbook: Workbook;
}>();

const getAllProblemsTags = (workbook: Workbook): string[] => {
  return workbook.includedProblems.flatMap((p) => p.tags);
};
</script>

<template>
  <div class="flex flex-col bg-white rounded-lg text-left p-5">
    <!--  Title  -->
    <h1 class="text-2xl font-bold text-gray-900" v-text="workbook.title" />

    <!--  CollectionType -->
    <div
      class="bg-primary rounded-lg p-1 px-2 text-white w-fit my-3"
      v-text="CollectionType.valueOf(workbook.collectionType)"
    />

    <!--  Description  -->
    <p class="my-3" v-text="workbook.description" />

    <div class="bg-gray-300 h-0.5 my-3" />

    <!--  TAG  -->
    <div class="flex flex-col">
      <h2 class="text-xl">관련 태그</h2>
      <div class="flex flex-wrap gap-2 my-3 h-fit">
        <div
          v-for="tag in getAllProblemsTags(workbook)"
          class="text-white bg-primary rounded-md px-3 py-1 h-fit"
          v-text="tag"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

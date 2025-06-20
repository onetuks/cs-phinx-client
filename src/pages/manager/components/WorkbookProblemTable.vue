<script setup lang="ts">
import { Problem } from "@/types/Problem";

const headers = ["문제번호", "제목", "태그"] as const;

const props = defineProps<{
  title: string;
  problems: Problem[];
}>();

const emits = defineEmits<{
  (event: "toggle-problem", problem: Problem, toIncluded: boolean): void;
}>();

const toggleProblemInclusion = (problem: Problem): void => {
  emits("toggle-problem", problem, props.title !== "포함된 문제");
};

const makeAllTagToString = (tags: string[]): string => {
  return tags.join(", ");
};
</script>

<template>
  <div class="bg-white w-full">
    <h3>{{ title }}</h3>
    <table class="table-auto border border-gray-200 w-full">
      <thead>
        <tr class="bg-gray-100 text-gray-700">
          <th
            v-for="header in headers"
            :key="header"
            class="py-2 border border-gray-300"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          @click="toggleProblemInclusion(problem)"
          v-for="(problem, index) in problems"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td class="px-1 py-1 border border-gray-300">
            {{ problem.problemId }}
          </td>
          <td class="px-1 py-1 border border-gray-300">
            {{ problem.title }}
          </td>
          <td class="px-1 py-1 border border-gray-300">
            {{ makeAllTagToString(problem.tags) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

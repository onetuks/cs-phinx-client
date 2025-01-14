<script setup lang="ts">
import { Problem } from "@/types/Problem";

const headers = ["문제번호", "제목", "문제집번호", "활성화"] as const;

const props = defineProps<{
  title: string;
  problems: Problem[];
}>();

const emits = defineEmits<{
  (event: "toggle-problem", problem: Problem, toIncluded: boolean): void;
}>();

const toggleProblemIncluded = (problem: Problem): void => {
  emits("toggle-problem", problem, props.title !== "포함된 문제");
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
            class="px-4 py-2 border border-gray-300"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          @click="toggleProblemIncluded(problem)"
          v-for="(problem, index) in problems"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td class="px-2 py-1 border border-gray-300">
            {{ problem.problemId }}
          </td>
          <td class="px-2 py-1 border border-gray-300">
            {{ problem.title }}
          </td>
          <td class="px-2 py-1 border border-gray-300">
            {{ problem.workBookId }}
          </td>
          <td
            class="px-2 py-1 border border-gray-300 flex justify-center items-center"
          >
            <div
              class="w-12 h-6 flex items-center cursor-pointer rounded-full"
              :class="problem.isActive ? 'bg-secondary' : 'bg-gray-300'"
            >
              <div
                class="w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300"
                :class="problem.isActive ? 'translate-x-6' : 'translate-x-2'"
              ></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

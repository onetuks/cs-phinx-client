<script setup lang="ts">
import { ref } from "vue";
import { initialProblem, Problem } from "@/types/Problem";
import { useRoute } from "vue-router";

const route = useRoute();
const problem = ref<Problem>(initialProblem);

const registerProblem = async (): Promise<void> => {
  if (!problem.value) return;
};
</script>

<template>
  <div class="px-10">
    <h1 class="text-4xl text-left text-gray-600 py-5">
      {{ route.name }}
    </h1>

    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2"
    >
      <label class="block text-sm mb-1">제목</label>
      <input
        v-model="problem.title"
        type="text"
        class="border px-2 py-1 w-full"
      />
    </div>

    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2"
    >
      <label class="block text-sm font-medium mb-1">설명</label>
      <textarea
        v-model="problem.description"
        class="border px-2 py-1 w-full"
        rows="5"
        placeholder="문제 내용에 대해서 입력해주세요."
      ></textarea>
    </div>

    <div class="flex flex-row justify-end space-x-4">
      <button
        @click="registerProblem"
        class="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
      >
        등록하기
      </button>
    </div>
  </div>
</template>

<style scoped></style>

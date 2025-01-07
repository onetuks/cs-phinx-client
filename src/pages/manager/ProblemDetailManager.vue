<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { Problem } from "@/types/Problem";

// onMounted(() => fetchProblem());

const route = useRoute();
const problem = ref<Problem>({
  problemId: "1",
  title: "DB 인덱스의 장단점에 대해서 말해주세요.",
  workBookId: "a",
  isActive: false,
});

const fetchProblem = async () => {
  const problemId = route.params.problemId;
};

const updateProblem = async () => {
  if (!problem.value) return;
};

const deleteProblem = async () => {
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
      <label class="block text-sm mb-1">문제번호</label>
      <input
        v-model="problem.problemId"
        type="text"
        class="border px-2 py-1 w-full"
        disabled
      />
    </div>

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
      <label class="block text-sm mb-1">문제집 번호</label>
      <input
        v-model="problem.workBookId"
        type="text"
        class="border px-2 py-1 w-full"
        disabled
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

    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2"
    >
      <input v-model="problem.isActive" type="checkbox" class="mr-2" />
      활성화
    </div>

    <div class="flex flex-row justify-end space-x-4">
      <button
        @click="updateProblem"
        class="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
      >
        수정하기
      </button>
      <button
        @click="deleteProblem"
        class="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-500"
      >
        삭제하기
      </button>
    </div>
  </div>
</template>

<style scoped></style>

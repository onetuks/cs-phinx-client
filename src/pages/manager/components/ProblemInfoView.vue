<script setup lang="ts">
import { Difficulties, Problem, Topics } from "@/types/Problem";
import { ref } from "vue";

const problem = defineModel("problem", {
  required: true,
  type: Object as () => Problem,
});

const newTag = ref<string>("");

const addTag = () => {
  const tag = newTag.value.trim();
  if (!tag && problem.value.tags.includes(tag)) return;
  problem.value.tags.push(tag);
  newTag.value = "";
};
const removeTag = (tag: string) => {
  problem.value.tags = problem.value.tags.filter((t) => t !== tag);
};
const toggleIsActive = (): void => {
  problem.value.isActive = !problem.value.isActive;
};
</script>

<template>
  <div class="w-full">
    <h3 class="text-xl">문제 관리 섹션</h3>
    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">문제번호</label>
      <input
        v-model="problem.problemId"
        type="text"
        class="border px-2 py-1 w-full"
        disabled
      />
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">제목</label>
      <input
        v-model="problem.title"
        type="text"
        class="border px-2 py-1 w-full"
      />
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm font-medium mb-1">본문</label>
      <textarea
        v-model="problem.description"
        class="border px-2 py-1 w-full"
        rows="5"
        placeholder="문제 본문에 대해서 입력해주세요."
      ></textarea>
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1"> 난이도 </label>
      <select
        v-model="problem.difficulty"
        class="border px-2 py-1 w-full rounded"
      >
        <option
          v-for="difficulty in Difficulties"
          :key="difficulty"
          :value="difficulty"
        >
          {{ difficulty }}
        </option>
      </select>
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1"> 주제 </label>
      <select v-model="problem.topic" class="border px-2 py-1 w-full rounded">
        <option v-for="topic in Topics" :key="topic" :value="topic">
          {{ topic }}
        </option>
      </select>
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">태그</label>
      <div class="flex flex-row space-x-5">
        <input
          v-model="newTag"
          type="text"
          class="border px-2 py-1 w-full"
          @keyup.enter="addTag"
          placeholder="태그를 입력하세요"
        />
        <button
          class="rounded border-gray-500 border bg-secondary hover:bg-primary w-20 text-white"
          @click="addTag"
        >
          추가
        </button>
      </div>
      <div
        class="flex flex-row bg-secondary mt-5 px-5 py-2 justify-start space-x-2 rounded-md border border-gray-400"
      >
        <div
          v-for="tag in problem.tags"
          v-text="tag"
          class="text-white bg-primary rounded-md px-3 py-1"
          @click="removeTag(tag)"
        />
      </div>
    </div>

    <div class="mb-4 text-start px-5 py-2 flex flex-row justify-between">
      활성화
      <div
        @click="toggleIsActive"
        class="w-12 h-6 flex items-center cursor-pointer rounded-full"
        :class="problem.isActive ? 'bg-primary' : 'bg-gray-300'"
      >
        <div
          class="w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300"
          :class="problem.isActive ? 'translate-x-6' : 'translate-x-2'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

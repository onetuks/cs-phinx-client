<script lang="ts" setup>
import { Difficulty, Problem, Topic } from "@/types/Problem";
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
        class="border px-2 py-1 w-full"
        disabled
        type="text"
      />
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">제목</label>
      <input
        v-model="problem.title"
        class="border px-2 py-1 w-full"
        type="text"
      />
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm font-medium mb-1">본문</label>
      <textarea
        v-model="problem.description"
        class="border px-2 py-1 w-full"
        placeholder="문제 본문에 대해서 입력해주세요."
        rows="5"
      ></textarea>
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1"> 난이도 </label>
      <select
        v-model="problem.difficulty"
        class="border px-2 py-1 w-full rounded"
      >
        <option
          v-for="difficulty in Difficulty.values()"
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
        <option v-for="topic in Topic.values()" :key="topic" :value="topic">
          {{ topic }}
        </option>
      </select>
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">태그</label>
      <div class="flex flex-row space-x-5">
        <input
          v-model="newTag"
          class="border px-2 py-1 w-full"
          placeholder="태그를 입력하세요"
          type="text"
          @keyup.enter="addTag"
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
          class="text-white bg-primary rounded-md px-3 py-1"
          @click="removeTag(tag)"
          v-text="tag"
        />
      </div>
    </div>

    <div class="mb-4 text-start px-5 py-2 flex flex-row justify-between">
      활성화
      <div
        :class="problem.isActive ? 'bg-primary' : 'bg-gray-300'"
        class="w-12 h-6 flex items-center cursor-pointer rounded-full"
        @click="toggleIsActive"
      >
        <div
          :class="problem.isActive ? 'translate-x-6' : 'translate-x-2'"
          class="w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

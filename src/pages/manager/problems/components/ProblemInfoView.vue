<script setup lang="ts">
import { initialProblem, Problem } from "@/types/Problem";
import { ref, watch } from "vue";

const props = defineProps<{
  problem: Problem;
}>();
const emits = defineEmits<{
  (event: "update:problem", problem: Problem): void;
}>();

const localProblem = ref<Problem>(initialProblem);

const toggleIsActive = (): void => {
  localProblem.value.isActive = !localProblem.value.isActive;
};

watch(
  () => props.problem,
  (newVal) => (localProblem.value = { ...newVal })
);
watch(
  () => localProblem.value,
  (newVal) => emits("update:problem", newVal),
  { deep: true }
);
</script>

<template>
  <div>
    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2"
    >
      <label class="block text-sm mb-1">문제번호</label>
      <input
        v-model="localProblem.problemId"
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
        v-model="localProblem.title"
        type="text"
        class="border px-2 py-1 w-full"
      />
    </div>

    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2"
    >
      <label class="block text-sm mb-1">문제집 번호</label>
      <input
        v-model="localProblem.workBookId"
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
        v-model="localProblem.description"
        class="border px-2 py-1 w-full"
        rows="5"
        placeholder="문제 내용에 대해서 입력해주세요."
      ></textarea>
    </div>

    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2 flex flex-row justify-between"
    >
      활성화
      <div
        @click="toggleIsActive"
        class="w-12 h-6 flex items-center cursor-pointer rounded-full"
        :class="localProblem.isActive ? 'bg-primary' : 'bg-gray-300'"
      >
        <div
          class="w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300"
          :class="localProblem.isActive ? 'translate-x-6' : 'translate-x-2'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

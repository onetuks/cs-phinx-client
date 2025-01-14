<script setup lang="ts">
import { Answer, AnswerTypes } from "@/types/Answer";
import { ref } from "vue";

const answer = defineModel("answer", {
  required: true,
  type: Object as () => Answer,
});

const newAnswerValue = ref<string>("");

const addAnswerValue = () => {
  const answerValue = newAnswerValue.value.trim();
  if (!answerValue && answer.value.answerValues.includes(answerValue)) return;
  answer.value.answerValues.push(answerValue);
  newAnswerValue.value = "";
};
const removeAnswerValue = (answerValue: string) => {
  answer.value.answerValues = answer.value.answerValues.filter(
    (a) => a !== answerValue
  );
};
</script>

<template>
  <div class="w-full">
    <h3 class="text-xl">답안 관리 섹션</h3>
    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">답안번호</label>
      <input
        v-model="answer.answerId"
        type="text"
        class="border px-2 py-1 w-full"
        disabled
      />
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">문제번호</label>
      <input
        v-model="answer.problemId"
        type="text"
        class="border px-2 py-1 w-full"
        disabled
      />
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">답안유형</label>
      <select
        v-model="answer.answerType"
        class="border px-2 py-1 w-full rounded"
      >
        <option
          v-for="answerType in AnswerTypes"
          :key="answerType"
          :value="answerType"
        >
          {{ answerType }}
        </option>
      </select>
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">모범답안</label>
      <div class="flex flex-row space-x-5">
        <input
          v-model="newAnswerValue"
          type="text"
          class="border px-2 py-1 w-full"
          @keyup.enter="addAnswerValue"
          placeholder="모범답안을 입력하세요"
        />
        <button
          class="rounded border-gray-500 border bg-secondary hover:bg-primary w-20 text-white"
          @click="addAnswerValue"
        >
          추가
        </button>
      </div>
      <div
        class="flex flex-row bg-secondary mt-5 px-5 py-2 justify-start space-x-2 rounded-md border border-gray-400"
      >
        <div
          v-for="answerValue in answer.answerValues"
          v-text="answerValue"
          class="text-white bg-primary rounded-md px-3 py-1"
          @click="removeAnswerValue(answerValue)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

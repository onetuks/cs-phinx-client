<script lang="ts" setup>
import { Answer, AnswerType } from "@/types/Answer";
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
    (a) => a !== answerValue,
  );
};
</script>

<template>
  <div class="w-full">
    <h4>답안 관리 섹션</h4>
    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">답안번호</label>
      <input
        v-model="answer.answerId"
        class="border px-2 py-1 w-full"
        disabled
        type="text"
      />
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">문제번호</label>
      <input
        v-model="answer.problemId"
        class="border px-2 py-1 w-full"
        disabled
        type="text"
      />
    </div>

    <div class="mb-4 text-start px-5 py-2">
      <label class="block text-sm mb-1">답안유형</label>
      <select
        v-model="answer.answerType"
        class="border px-2 py-1 w-full rounded"
      >
        <option
          v-for="answerType in AnswerType.values()"
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
          class="border px-2 py-1 w-full"
          placeholder="모범답안을 입력하세요"
          type="text"
          @keyup.enter="addAnswerValue"
        />
        <button @click="addAnswerValue">추가</button>
      </div>
      <div
        class="flex flex-row bg-secondary mt-5 px-5 py-2 justify-start space-x-2 rounded-md border border-gray-400"
      >
        <div
          v-for="answerValue in answer.answerValues"
          class="text-white bg-primary rounded-md px-3 py-1"
          @click="removeAnswerValue(answerValue)"
          v-text="answerValue"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

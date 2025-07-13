<script lang="ts" setup>
import { Answer } from "@/types/Answer";
import { ref } from "vue";
import { toaster } from "@/utils/ToastUtil";

const props = defineProps<{
  answer: Answer;
}>();

const userAnswer = ref<string>("");
const userScore = ref<number>(0);

const gradeAnswer = async () => {
  userScore.value = await GraderApi.putUserAnswer(
    props.answer.answerId,
    userAnswer.value
  );

  reactAboutUserScore(userScore.value);
};

const reactAboutUserScore = (score: number) => {
  switch (score) {
    case score >= 100:
      toaster.success("정답입니다!!");
      break;
    case score >= 70:
      toaster.info("정답에 가깝습니다!");
      break;
    case score >= 50:
      toaster.warning("아깝습니다~");
      break;
    default:
      toaster.error("오답입니다");
      break;
  }
};
</script>

<template>
  <div class="flex flex-col bg-white rounded-lg text-left p-5">
    <textarea
      v-model="userAnswer"
      class="w-full p-4 min-h-52 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
      placeholder="답안을 입력하세요"
    />
    <div class="flex justify-end mt-5">
      <button
        class="bg-primary rounded-lg text-white w-fit px-3 py-1"
        @click="gradeAnswer"
      >
        제출하기
      </button>
    </div>
  </div>
</template>

<style scoped></style>

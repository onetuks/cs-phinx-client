<script lang="ts" setup>
import { Answer } from "@/types/Answer";
import { ref } from "vue";
import { toaster } from "@/utils/ToastUtil";
import { GraderApi } from "@/apis/GraderApi";

function reactAboutUserScore(score: number) {
  if (score >= 100) {
    toaster.success("정답입니다!!");
  } else if (score >= 70) {
    toaster.info("정답에 가깝습니다!");
  } else if (score >= 50) {
    toaster.warning("아깝습니다~");
  } else {
    toaster.error("오답입니다");
  }
}

function clearUserAnswer() {
  userAnswer.value = "";
}

function moveToNextProblemPage() {
  emits("next:problem");
}

const emits = defineEmits<{
  (event: "next:problem"): void;
}>();

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
</script>

<template>
  <div class="flex flex-col bg-white rounded-lg text-left p-5">
    <textarea
      v-model="userAnswer"
      class="w-full p-4 min-h-52 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
      placeholder="답안을 입력하세요"
    />

    <div class="flex justify-end mt-5 gap-3">
      <button
        v-if="userScore >= 100"
        class="bg-secondary rounded-lg text-white w-fit px-3 py-1"
        @click="moveToNextProblemPage"
      >
        다음 문제
      </button>
      <button
        class="bg-secondary rounded-lg text-white w-fit px-3 py-1"
        @click="clearUserAnswer"
      >
        초기화
      </button>
      <button
        class="bg-secondary rounded-lg text-white w-fit px-3 py-1 hover:bg-primary"
        @click="gradeAnswer"
      >
        제출하기
      </button>
    </div>
  </div>
</template>

<style scoped></style>

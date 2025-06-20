<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { AnswerApis } from "@/apis/AnswerApis";
import { ProblemApis } from "@/apis/ProblemApis";
import { Answer, initialAnswer } from "@/types/Answer";
import { initialProblem, Problem } from "@/types/Problem";
import { RouteUtil } from "@/utils/RouteUtil";
import ProblemManagerView from "@/pages/manager/components/ProblemManagerView.vue";
import AnswerManagerView from "@/pages/manager/components/AnswerManagerView.vue";

const route = useRoute();
const problem = ref<Problem>(initialProblem);
const answer = ref<Answer>(initialAnswer);

const fetchProblem = async (problemId: number) => {
  await ProblemApis.getProblem(problemId).then((res: Problem) => {
    problem.value = res;
  });
};
const fetchAnswer = async (problemId: number) => {
  await AnswerApis.getAnswer(problemId).then((res: Answer) => {
    answer.value = res;
  });
};

onMounted(() => {
  if (!RouteUtil.isForRegistration(route)) {
    const problemId = Number(RouteUtil.extractParam(route, "problemId"));
    fetchProblem(problemId);
    fetchAnswer(problemId);
  }
});
</script>

<template>
  <div class="p-10">
    <h1 class="text-4xl text-left text-gray-600 mb-5">
      {{ route.name }}
    </h1>

    <div class="flex flex-row justify-between space-x-5">
      <problem-manager-view v-model:problem="problem" />
      <answer-manager-view v-model:answer="answer" :problem="problem" />
    </div>
  </div>
</template>

<style scoped></style>

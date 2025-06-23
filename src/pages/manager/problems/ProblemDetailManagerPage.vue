<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Answer, initialAnswer } from "@/types/Answer";
import { initialProblem, Problem } from "@/types/Problem";
import { RouteUtil } from "@/utils/RouteUtil";
import { ProblemManipulator } from "@/pages/manager/problems/ProblemManipulator";
import ProblemDetailManagerView from "@/pages/manager/problems/components/ProblemDetailManagerView.vue";
import AnswerDetailManagerView from "@/pages/manager/problems/components/AnswerDetailManagerView.vue";
import ProblemDetailManagerButtonView from "@/pages/manager/problems/components/ProblemDetailManagerButtonView.vue";

const problem = ref<Problem>(initialProblem);
const answer = ref<Answer>(initialAnswer);

onMounted(() => {
  if (!RouteUtil.isForRegistration()) {
    const problemId = Number(RouteUtil.extractParam("problemId"));
    ProblemManipulator.fetchProblem(problemId, problem);
    ProblemManipulator.fetchAnswer(problemId, answer);
  }
});
</script>

<template>
  <div class="p-10">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-4xl text-left text-gray-600 mb-5">
        {{ $route.name }}
      </h1>
      <problem-detail-manager-button-view :problem="problem" :answer="answer" />
    </div>
    <div class="flex flex-row justify-between space-x-5">
      <problem-detail-manager-view v-model:problem="problem" />
      <answer-detail-manager-view v-model:answer="answer" />
    </div>
  </div>
</template>

<style scoped></style>

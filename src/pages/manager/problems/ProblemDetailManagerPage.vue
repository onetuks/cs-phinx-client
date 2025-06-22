<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { Answer, initialAnswer } from "@/types/Answer";
import { initialProblem, Problem } from "@/types/Problem";
import { RouteUtil } from "@/utils/RouteUtil";
import { ProblemManipulator } from "@/pages/manager/problems/ProblemManipulator";
import ProblemManagerView from "@/pages/manager/problems/components/ProblemManagerView.vue";
import AnswerManagerView from "@/pages/manager/problems/components/AnswerManagerView.vue";

const route = useRoute();
const problem = ref<Problem>(initialProblem);
const answer = ref<Answer>(initialAnswer);

onMounted(() => {
  if (!RouteUtil.isForRegistration(route)) {
    const problemId = Number(RouteUtil.extractParam(route, "problemId"));
    ProblemManipulator.fetchProblem(problemId, problem);
    ProblemManipulator.fetchAnswer(problemId, answer);
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

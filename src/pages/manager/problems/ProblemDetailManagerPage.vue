<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {Answer, initialAnswer} from "@/types/Answer";
import {initialProblem, Problem} from "@/types/Problem";
import {RouteUtil} from "@/utils/RouteUtil";
import ProblemDetailManagerView
  from "@/pages/manager/problems/components/ProblemDetailManagerView.vue";
import AnswerDetailManagerView
  from "@/pages/manager/problems/components/AnswerDetailManagerView.vue";
import ProblemDetailManagerButtonView
  from "@/pages/manager/problems/components/ProblemDetailManagerButtonView.vue";
import {ProblemManipulator} from "@/pages/challenger/problems/ProblemManipulator";

const problem = ref<Problem>(initialProblem);
const answer = ref<Answer>(initialAnswer);

onMounted(async () => {
  if (!RouteUtil.isForRegistration()) {
    const problemId = Number(RouteUtil.extractParam("problemId"));

    problem.value = ProblemManipulator.fetchProblem(problemId);
    answer.value = ProblemManipulator.fetchAnswer(problemId);
  }
});
</script>

<template>
  <div class="p-10">
    <div class="flex flex-row justify-between items-center">
      <h1 class="mb-5">
        {{ $route.name }}
      </h1>
      <problem-detail-manager-button-view :answer="answer" :problem="problem" />
    </div>
    <div class="flex flex-row justify-between space-x-5">
      <problem-detail-manager-view v-model:problem="problem" />
      <answer-detail-manager-view v-model:answer="answer" />
    </div>
  </div>
</template>

<style scoped></style>

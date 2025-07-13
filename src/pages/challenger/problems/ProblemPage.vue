<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { RouteUtil } from "@/utils/RouteUtil";
import { initialProblem, Problem } from "@/types/Problem";
import { Answer, initialAnswer } from "@/types/Answer";
import ProblemInfoView from "@/pages/challenger/problems/components/ProblemInfoView.vue";
import ProblemTrialView from "@/pages/challenger/problems/components/ProblemTrialView.vue";
import { ProblemManipulator } from "@/pages/challenger/problems/ProblemManipulator";

const problem = ref<Problem>(initialProblem);
const answer = ref<Answer>(initialAnswer);

onMounted(async () => {
  const problemId = Number(RouteUtil.extractParam("problemId"));

  problem.value = await ProblemManipulator.fetchProblem(problemId);
  answer.value = await ProblemManipulator.fetchAnswer(problemId);
});
</script>

<template>
  <div class="grid grid-cols-2 rounded-2xl bg-secondary my-10 p-5 gap-5">
    <ProblemInfoView :problem="problem" />
    <ProblemTrialView :answer="answer" />
  </div>
</template>

<style scoped></style>

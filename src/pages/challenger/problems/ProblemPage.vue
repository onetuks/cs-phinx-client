<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { RouteUtil } from "@/utils/RouteUtil";
import { initialProblem, Problem } from "@/types/Problem";
import { Answer, initialAnswer } from "@/types/Answer";
import { ProblemManipulator } from "@/pages/manipulator/ProblemManipulator";
import { useProblemsStore } from "@/stores/Problems";
import { useWorkbookStore } from "@/stores/Workbook";
import ProblemInfoView from "@/pages/challenger/problems/components/ProblemInfoView.vue";
import ProblemTrialView from "@/pages/challenger/problems/components/ProblemTrialView.vue";

function moveToNextProblemPage() {
  try {
    // 다음 문제 페이지로 이동
    const nextProblemId = useProblemsStore().getNextProblemId(problem.value);
    RouteUtil.moveToProblemPage(nextProblemId);
  } catch (error) {
    // 마지막 문제라서 문제집 페이지로 이동
    const workbookId = useWorkbookStore().getWorkbookId();
    RouteUtil.moveToWorkbookPage(workbookId);
  }
}

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
    <ProblemTrialView :answer="answer" @next-problem="moveToNextProblemPage" />
  </div>
</template>

<style scoped></style>

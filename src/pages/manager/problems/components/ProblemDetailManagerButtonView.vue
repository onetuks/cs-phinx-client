<script setup lang="ts">
import { RouteUtil } from "@/utils/RouteUtil";
import { ProblemManipulator } from "@/pages/manager/problems/ProblemManipulator";
import { Problem } from "@/types/Problem";
import { Answer } from "@/types/Answer";
import ManagerButton from "@/components/widgets/ManagerButton.vue";

defineProps<{
  problem: Problem;
  answer: Answer;
}>();
</script>

<template>
  <div class="px-5">
    <div
      class="flex flex-row justify-end space-x-4"
      v-if="RouteUtil.isForRegistration()"
    >
      <manager-button
        :click-button-type="'등록하기'"
        @click-button="ProblemManipulator.registerProblem(problem, answer)"
      />
    </div>
    <div class="flex flex-row justify-end space-x-4" v-else>
      <manager-button
        :click-button-type="'수정하기'"
        @click-button="ProblemManipulator.editProblem(problem, answer)"
      />
      <manager-button
        :click-button-type="'삭제하기'"
        @click-button="
          ProblemManipulator.removeProblem(
            problem.value.problemId,
            answer.value.answerId
          )
        "
      />
    </div>
  </div>
</template>

<style scoped></style>

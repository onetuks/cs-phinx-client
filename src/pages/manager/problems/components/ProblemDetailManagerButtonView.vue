<script lang="ts" setup>
import { RouteUtil } from "@/utils/RouteUtil";
import { ProblemManagerManipulator } from "@/pages/manipulator/ProblemManagerManipulator";
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
      v-if="RouteUtil.isForRegistration()"
      class="flex flex-row justify-end space-x-4"
    >
      <manager-button
        :click-button-type="'등록하기'"
        @click-button="
          ProblemManagerManipulator.registerProblem(problem, answer)
        "
      />
    </div>
    <div v-else class="flex flex-row justify-end space-x-4">
      <manager-button
        :click-button-type="'수정하기'"
        @click-button="ProblemManagerManipulator.editProblem(problem, answer)"
      />
      <manager-button
        :click-button-type="'삭제하기'"
        @click-button="
          ProblemManagerManipulator.removeProblem(
            problem.problemId,
            answer.answerId,
          )
        "
      />
    </div>
  </div>
</template>

<style scoped></style>

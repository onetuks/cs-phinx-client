<script setup lang="ts">
import AnswerInfoView from "@/pages/manager/problems/components/AnswerInfoView.vue";
import ManagerButton from "@/components/widgets/ManagerButton.vue";
import { watch } from "vue";
import { useRoute } from "vue-router";
import { Answer } from "@/types/Answer";
import { Problem } from "@/types/Problem";
import { RouteUtil } from "@/utils/RouteUtil";
import { ProblemManipulator } from "@/pages/manager/problems/ProblemManipulator";

const answer = defineModel("answer", {
  required: true,
  type: Object as () => Answer,
});
const props = defineProps<{
  problem: Problem;
}>();

const route = useRoute();

watch(props.problem, (newVal) => {
  answer.value.problemId = newVal.problemId;
});
</script>

<template>
  <div class="w-full h-fit border border-primary rounded-md py-5">
    <answer-info-view v-model:answer="answer" />
    <div
      class="px-5"
      v-if="problem.problemId !== undefined && problem.problemId !== -1"
    >
      <div
        class="flex flex-row justify-end space-x-4"
        v-if="RouteUtil.isForRegistration(route)"
      >
        <manager-button
          :click-button-type="'등록하기'"
          @click-button="ProblemManipulator.registerAnswer(answer)"
        />
      </div>
      <div class="flex flex-row justify-end space-x-4" v-else>
        <manager-button
          :click-button-type="'수정하기'"
          @click-button="ProblemManipulator.editAnswer(answer)"
        />
        <manager-button
          :click-button-type="'삭제하기'"
          @click-button="ProblemManipulator.removeAnswer(answer.value.answerId)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

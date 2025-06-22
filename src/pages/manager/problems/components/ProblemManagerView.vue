<script setup lang="ts">
import ProblemInfoView from "@/pages/manager/problems/components/ProblemInfoView.vue";
import ManagerButton from "@/components/widgets/ManagerButton.vue";
import { useRoute } from "vue-router";
import { Problem } from "@/types/Problem";
import { RouteUtil } from "@/utils/RouteUtil";
import { ProblemManipulator } from "@/pages/manager/problems/ProblemManipulator";

const route = useRoute();

const problem = defineModel("problem", {
  required: true,
  type: Object as () => Problem,
});
</script>

<template>
  <div class="w-full h-fit border border-primary rounded-md py-5">
    <problem-info-view v-model:problem="problem" />
    <div class="px-5">
      <div
        class="flex flex-row justify-end space-x-4"
        v-if="RouteUtil.isForRegistration(route)"
      >
        <manager-button
          :click-button-type="'등록하기'"
          @click-button="ProblemManipulator.registerProblem(problem)"
        />
      </div>
      <div class="flex flex-row justify-end space-x-4" v-else>
        <manager-button
          :click-button-type="'수정하기'"
          @click-button="ProblemManipulator.editProblem(problem)"
        />
        <manager-button
          :click-button-type="'삭제하기'"
          @click-button="
            ProblemManipulator.removeProblem(problem.value.problemId)
          "
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

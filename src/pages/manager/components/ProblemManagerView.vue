<script setup lang="ts">
import ProblemInfoView from "@/pages/manager/components/ProblemInfoView.vue";
import ManagerButton from "@/components/widgets/ManagerButton.vue";
import { ProblemApis } from "@/apis/ProblemApis";
import { useRoute } from "vue-router";
import { Problem } from "@/types/Problem";
import {
  PROBLEM_EDIT_SUCCESS,
  PROBLEM_REGISTER_SUCCESS,
  PROBLEM_REMOVE_SUCCESS,
  toaster,
} from "@/utils/ToastUtil";
import { ProblemCommand } from "@/apis/commands/ProblemCommand";
import { RouteUtil } from "@/utils/RouteUtil";

const problem = defineModel("problem", {
  required: true,
  type: Object as () => Problem,
});

const route = useRoute();

const registerProblem = async () => {
  await ProblemApis.postNewProblem(
    ProblemCommand.fromProblem(problem.value)
  ).then((problemId) => {
    problem.value.problemId = problemId;
    toaster.success(PROBLEM_REGISTER_SUCCESS);
  });
};
const editProblem = async () => {
  await ProblemApis.patchProblem(
    problem.value.problemId,
    ProblemCommand.fromProblem(problem.value)
  ).then(() => {
    toaster.success(PROBLEM_EDIT_SUCCESS);
  });
};
const removeProblem = async () => {
  await ProblemApis.deleteProblem(problem.value.problemId).then(() => {
    toaster.success(PROBLEM_REMOVE_SUCCESS);
  });
};
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
          @click-button="registerProblem"
        />
      </div>
      <div class="flex flex-row justify-end space-x-4" v-else>
        <manager-button
          :click-button-type="'수정하기'"
          @click-button="editProblem"
        />
        <manager-button
          :click-button-type="'삭제하기'"
          @click-button="removeProblem"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

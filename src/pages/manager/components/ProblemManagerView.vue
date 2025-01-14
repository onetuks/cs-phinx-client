<script setup lang="ts">
import ProblemInfoView from "@/pages/manager/components/ProblemInfoView.vue";
import ManagerButton from "@/components/widgets/ManagerButton.vue";
import { ProblemApis } from "@/apis/ProblemApis";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { Problem } from "@/types/Problem";

const INVALID_PROBLEM_COMMAND =
  "문제 정보가 충분히 기입되지 않았습니다" as const;
const PROBLEM_REGISTER_SUCCESS = "문제가 성공적으로 등록되었습니다" as const;
const PROBLEM_EDIT_SUCCESS = "문제가 성공적으로 수정되었습니다" as const;
const PROBLEM_REMOVE_SUCCESS = "문제가 성공적으로 삭제되었습니다" as const;

const problem = defineModel("problem", {
  required: true,
  type: Object as () => Problem,
});

const route = useRoute();
const toast = useToast();

const isForRegistration: boolean = route.path.includes("/registration");

const registerProblem = async () => {
  try {
    const problemCommand = ProblemApis.convertToCommand(problem.value);
    ProblemApis.checkCommandValidity(problemCommand);
    await ProblemApis.postNewProblem(problemCommand).then((problemId) => {
      problem.value.problemId = problemId;
      toast.success(PROBLEM_REGISTER_SUCCESS);
    });
  } catch (error) {
    toast.error(INVALID_PROBLEM_COMMAND);
  }
};
const editProblem = async () => {
  try {
    const problemCommand = ProblemApis.convertToCommand(problem.value);
    ProblemApis.checkCommandValidity(problemCommand);
    await ProblemApis.patchProblem(
      problem.value.problemId,
      problemCommand
    ).then(() => toast.success(PROBLEM_EDIT_SUCCESS));
  } catch (error) {
    toast.error(INVALID_PROBLEM_COMMAND);
  }
};
const removeProblem = async () => {
  await ProblemApis.deleteProblem(problem.value.problemId).then(() => {
    toast.success(PROBLEM_REMOVE_SUCCESS);
  });
};
</script>

<template>
  <div class="w-full h-fit border border-primary rounded-md py-5">
    <problem-info-view v-model:problem="problem" />
    <div class="px-5">
      <div class="flex flex-row justify-end space-x-4" v-if="isForRegistration">
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

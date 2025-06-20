<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { Problem } from "@/types/Problem";
import { initialWorkbook, Workbook } from "@/types/Workbook";
import { ProblemApis } from "@/apis/ProblemApis";
import { WorkbookApis } from "@/apis/WorkbookApis";
import WorkbookProblemTable from "@/pages/manager/components/WorkbookProblemTable.vue";
import ManagerButton from "@/components/widgets/ManagerButton.vue";
import WorkbookInfoView from "@/pages/manager/components/WorkbookInfoView.vue";
import {
  INVALID_WORKBOOK_COMMAND,
  WORKBOOK_EDIT_SUCCESS,
  WORKBOOK_REGISTER_SUCCESS,
  WORKBOOK_REMOVE_SUCCESS,
} from "@/consts/Messages";

const route = useRoute();
const toast = useToast();
const workbook = ref<Workbook>(initialWorkbook);
const includedProblems = ref<Problem[]>([]);
const excludedProblems = ref<Problem[]>([]);

const isForRegistration: boolean = route.path.includes("/registration");

const handleToggleProblem = (problem: Problem, toIncluded: boolean): void => {
  if (toIncluded) {
    includedProblems.value.push(problem);
    excludedProblems.value = excludedProblems.value.filter(
      (p) => problem.problemId !== p.problemId
    );
  } else {
    excludedProblems.value.push(problem);
    includedProblems.value = includedProblems.value.filter(
      (p) => problem.problemId !== p.problemId
    );
  }
};

const updateWorkbook = (updatedWorkBook: Workbook): void => {
  workbook.value = { ...updatedWorkBook };
};

const registerWorkbook = async (): Promise<void> => {
  try {
    const workbookCommand = WorkbookApis.convertToCommand(workbook.value);
    WorkbookApis.checkCommandValidity(workbookCommand);
    await WorkbookApis.postNewWorkbook(workbookCommand).then((workbookId) => {
      workbook.value.workbookId = workbookId;
      toast.success(WORKBOOK_REGISTER_SUCCESS);
    });
  } catch (error) {
    toast.error(INVALID_WORKBOOK_COMMAND);
  }
};

const editWorkbook = async (): Promise<void> => {
  try {
    const workbookCommand = WorkbookApis.convertToCommand(workbook.value);
    WorkbookApis.checkCommandValidity(workbookCommand);
    await WorkbookApis.patchWorkbook(
      workbook.value.workbookId,
      workbookCommand
    ).then(() => toast.success(WORKBOOK_EDIT_SUCCESS));
  } catch (error) {
    toast.error(INVALID_WORKBOOK_COMMAND);
  }
};
const removeWorkbook = async (): Promise<void> => {
  try {
    await WorkbookApis.deleteWorkbook(workbook.value.workbookId).then(() =>
      toast.success(WORKBOOK_REMOVE_SUCCESS)
    );
  } catch (error) {
    toast.error(INVALID_WORKBOOK_COMMAND);
  }
};

onMounted(() => {
  if (!isForRegistration) {
    const workBookId = Number(route.params.workBookId);
    fetchWorkbook(workBookId);
  }

  fetchAllProblems();
});

const fetchWorkbook = async (workbookId: number): Promise<void> => {
  await WorkbookApis.getWorkbook(workbookId).then((res) => {
    workbook.value = res;
  });
};

const fetchAllProblems = async () => {
  await ProblemApis.getProblems(undefined, 1000).then((res) => {
    const allProblems: Problem[] = res.content;
    includedProblems.value = workbook.value.includedProblems;
    excludedProblems.value = allProblems.filter(
      (problem: Problem) => !includedProblems.value.includes(problem)
    );
  });
};
</script>

<template>
  <div class="px-10">
    <h1 class="text-4xl text-left text-gray-600 py-5">
      {{ route.name }}
    </h1>

    <workbook-info-view
      :workbook="workbook"
      @update:workbook="updateWorkbook"
    />

    <div
      class="mb-4 bg-secondary border border-gray-400 rounded-md px-5 py-2 flex flex-row justify-between space-x-4"
    >
      <workbook-problem-table
        title="포함된 문제"
        :problems="includedProblems"
        @toggle-problem="handleToggleProblem"
      />
      <workbook-problem-table
        title="미포함 문제"
        :problems="excludedProblems"
        @toggle-problem="handleToggleProblem"
      />
    </div>

    <div class="flex flex-row justify-end space-x-4" v-if="isForRegistration">
      <manager-button
        :click-button-type="'등록하기'"
        @click="registerWorkbook"
      />
    </div>
    <div class="flex flex-row justify-end space-x-4" v-else>
      <manager-button
        :click-button-type="'수정하기'"
        @click-button="editWorkbook"
      />
      <manager-button
        :click-button-type="'삭제하기'"
        @click-button="removeWorkbook"
      />
    </div>
  </div>
</template>

<style scoped></style>

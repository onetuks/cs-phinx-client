<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Problem } from "@/types/Problem";
import { initialWorkbook, Workbook } from "@/types/Workbook";
import { ProblemApis } from "@/apis/ProblemApis";
import WorkbookDetailManagerProblemTable from "@/pages/manager/workbooks/components/WorkbookDetailManagerProblemTable.vue";
import ManagerButton from "@/components/widgets/ManagerButton.vue";
import WorkbookDetailManagerInfoView from "@/pages/manager/workbooks/components/WorkbookDetailManagerInfoView.vue";
import { RouteUtil } from "@/utils/RouteUtil";
import { WorkbookManagerManipulator } from "@/pages/manipulator/WorkbookManagerManipulator";
import { WorkbookManipulator } from "@/pages/manipulator/WorkbookManipulator";

async function fetchAllProblems() {
  await ProblemApis.getProblems(undefined, undefined, 1000).then((res) => {
    const allProblems: Problem[] = res.content;
    includedProblems.value = workbook.value.includedProblems;
    excludedProblems.value = allProblems.filter(
      (problem: Problem) => !includedProblems.value.includes(problem),
    );
  });
}

onMounted(async () => {
  if (!RouteUtil.isForRegistration()) {
    const workbookId = Number(RouteUtil.extractParam("workbookId"));
    workbook.value = await WorkbookManipulator.fetchWorkbook(workbookId);
  }

  await fetchAllProblems();
});

const workbook = ref<Workbook>(initialWorkbook);
const includedProblems = ref<Problem[]>([]);
const excludedProblems = ref<Problem[]>([]);

function handleToggleProblem(problem: Problem, toIncluded: boolean) {
  if (toIncluded) {
    includedProblems.value.push(problem);
    excludedProblems.value = excludedProblems.value.filter(
      (p) => problem.problemId !== p.problemId,
    );
  } else {
    excludedProblems.value.push(problem);
    includedProblems.value = includedProblems.value.filter(
      (p) => problem.problemId !== p.problemId,
    );
  }
}

function updateWorkbook(updatedWorkBook: Workbook) {
  workbook.value = { ...updatedWorkBook };
}
</script>

<template>
  <div class="px-10">
    <h1 class="py-5">
      {{ $route.name }}
    </h1>

    <workbook-detail-manager-info-view
      :workbook="workbook"
      @update:workbook="updateWorkbook"
    />

    <div
      class="mb-4 bg-secondary border border-gray-400 rounded-md px-5 py-2 flex flex-row justify-between space-x-4"
    >
      <workbook-detail-manager-problem-table
        :problems="includedProblems"
        title="포함된 문제"
        @toggle-problem="handleToggleProblem"
      />
      <workbook-detail-manager-problem-table
        :problems="excludedProblems"
        title="미포함 문제"
        @toggle-problem="handleToggleProblem"
      />
    </div>

    <div
      v-if="RouteUtil.isForRegistration()"
      class="flex flex-row justify-end space-x-4"
    >
      <manager-button
        :click-button-type="'등록하기'"
        @click-button="WorkbookManagerManipulator.registerWorkbook(workbook)"
      />
    </div>
    <div v-else class="flex flex-row justify-end space-x-4">
      <manager-button
        :click-button-type="'수정하기'"
        @click-button="WorkbookManagerManipulator.editWorkbook(workbook)"
      />
      <manager-button
        :click-button-type="'삭제하기'"
        @click-button="
          WorkbookManagerManipulator.removeWorkbook(workbook.workbookId)
        "
      />
    </div>
  </div>
</template>

<style scoped></style>

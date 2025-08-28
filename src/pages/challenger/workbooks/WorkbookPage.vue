<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { initialWorkbook, Workbook } from "@/types/Workbook";
import { RouteUtil } from "@/utils/RouteUtil";
import WorkbookInfoView from "@/pages/challenger/workbooks/components/WorkbookInfoView.vue";
import ProblemListView from "@/pages/challenger/problems/ProblemListView.vue";
import { WorkbookManipulator } from "@/pages/manipulator/WorkbookManipulator";

onMounted(async () => {
  const workbookId = Number(RouteUtil.extractParam("workbookId"));
  workbook.value = await WorkbookManipulator.fetchWorkbook(workbookId);
});

const workbook = ref<Workbook>(initialWorkbook);
</script>

<template>
  <div class="grid grid-cols-2 rounded-2xl bg-secondary my-10 p-5 gap-5">
    <WorkbookInfoView :workbook="workbook" />
    <ProblemListView
      :problems="workbook.includedProblems"
      :workbook-id="workbook.workbookId"
    />
  </div>
</template>

<style scoped></style>

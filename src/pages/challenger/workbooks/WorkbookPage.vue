<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { WorkbookApis } from "@/apis/WorkbookApis";
import { initialWorkbook, Workbook } from "@/types/Workbook";
import { RouteUtil } from "@/utils/RouteUtil";
import WorkbookInfoView from "@/pages/challenger/workbooks/components/WorkbookInfoView.vue";
import WorkbookProblemListView from "@/pages/challenger/workbooks/components/WorkbookProblemListView.vue";

async function fetchWorkbook(workbookId: number) {
  await WorkbookApis.getWorkbook(workbookId).then((res) => {
    workbook.value = res;
  });
}

onMounted(() => {
  const workbookId = Number(RouteUtil.extractParam("workbookId"));
  fetchWorkbook(workbookId);
});

const workbook = ref<Workbook>(initialWorkbook);
</script>

<template>
  <div class="grid grid-cols-2 rounded-2xl bg-secondary my-10 p-5 gap-5">
    <WorkbookInfoView :workbook="workbook" />
    <WorkbookProblemListView
      :problems="workbook.includedProblems"
      :workbook-id="workbook.workbookId"
    />
  </div>
</template>

<style scoped></style>

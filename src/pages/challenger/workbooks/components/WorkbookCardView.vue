<script lang="ts" setup>
import { Workbook } from "@/types/Workbook";
import WorkbookCardImageView from "@/pages/challenger/workbooks/components/WorkbookCardImageView.vue";
import WorkbookCardInfoView from "@/pages/challenger/workbooks/components/WorkbookCardInfoView.vue";
import { RouteUtil } from "@/utils/RouteUtil";

defineProps<{
  workbook: Workbook;
}>();
</script>

<template>
  <div
    class="flex flex-col flex-grow rounded-lg border-2 border-gray-200 bg-white"
    @click="RouteUtil.moveToWorkbookPage(workbook.workbookId)"
  >
    <WorkbookCardImageView :workbook="workbook" />
    <WorkbookCardInfoView :workbook="workbook" />
  </div>
</template>

<style scoped></style>

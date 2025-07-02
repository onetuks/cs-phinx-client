<script lang="ts" setup>
import WorkbookCardView from "@/pages/challenger/workbooks/components/WorkbookCardView.vue";
import { onMounted, ref } from "vue";
import { Workbook } from "@/types/WorkBook";
import { Page, PageUtil } from "@/utils/PageUtil";
import { WorkbookApis } from "@/apis/WorkbookApis";

async function fetchWorkbooks(): Promise<void> {
  await WorkbookApis.getWorkbooks(workbooks.value.number).then((res) => {
    workbooks.value = res;
  });
}

onMounted(() => {
  fetchWorkbooks();
});

const workbooks = ref<Page<Workbook>>(PageUtil.emptyPage());
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 px-20"
  >
    <WorkbookCardView v-for="workbook in workbooks" :workbook="workbook" />
  </div>
</template>

<style scoped></style>

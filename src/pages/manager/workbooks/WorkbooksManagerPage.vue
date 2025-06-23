<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Workbook } from "@/types/Workbook";
import { WorkbookApis } from "@/apis/WorkbookApis";
import { Page, PageUtil } from "@/utils/PageUtil";
import { DateUtil } from "@/utils/DateUtil";
import { RouteUtil } from "@/utils/RouteUtil";

const headers: string[] = [
  "번호",
  "제목",
  "타입",
  "활성화",
  "수정일",
  "편집",
] as const;

const workbooks = ref<Page<Workbook>>(PageUtil.emptyPage());

const toggleWorkbookActiveness = async (workbook: Workbook): Promise<void> => {
  // const targetWorkbook = workbooks.value.content.find((w) => {
  //   return w.workbookId === workbook.workbookId;
  // });
  // if (!targetWorkbook) return;
  // targetWorkbook.isActive = !targetWorkbook.isActive;
  //
  // WorkbookManipulator.editWorkbook(targetWorkbook);
};

onMounted(() => fetchWorkbooks());

const fetchWorkbooks = async (): Promise<void> => {
  await WorkbookApis.getWorkbooks(workbooks.value.number).then((res) => {
    workbooks.value = res;
  });
};
const fetchPrevPage = () => {};
const fetchNextPage = () => {};
</script>

<template>
  <div class="flex flex-col px-10">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-4xl text-left text-gray-600 px-10 py-5">
        {{ $route.name }}
      </h1>
      <button
        class="bg-secondary text-white rounded-lg px-4 py-2 hover:bg-primary h-fit"
        @click="RouteUtil.moveToWorkbookRegisterPage"
      >
        문제집 등록하기
      </button>
    </div>
    <table class="table-auto border border-gray-200">
      <thead>
        <tr class="bg-gray-100 text-gray-700">
          <th
            v-for="header in headers"
            :key="header"
            class="px-4 py-2 border border-gray-300"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(workbook, index) in workbooks.content"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td class="px-4 py-2 border border-gray-300">
            {{ workbook.workbookId }}
          </td>

          <td class="px-4 py-2 border border-gray-300">{{ workbook.title }}</td>

          <td class="px-4 py-2 border border-gray-300">
            {{ workbook.collectionType }}
          </td>

          <td
            class="px-4 py-2 border border-gray-300 flex justify-center items-center"
          >
            <div
              :class="workbook.isActive ? 'bg-secondary' : 'bg-gray-300'"
              class="w-12 h-6 flex items-center cursor-pointer rounded-full"
              @click="toggleWorkbookActiveness(workbook)"
            >
              <div
                :class="workbook.isActive ? 'translate-x-6' : 'translate-x-2'"
                class="w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300"
              ></div>
            </div>
          </td>

          <td
            class="px-4 py-2 border border-gray-300"
            v-text="DateUtil.formatDate(workbook.updatedAt)"
          ></td>

          <td class="px4 border border-gray-300">
            <div
              :class="[
                'w-8 h-6  flex justify-center items-center mx-auto rounded-md ',
                'shadow transform transition-transform duration-300',
                'bg-secondary hover:bg-primary',
              ]"
              @click="RouteUtil.moveToWorkbookEditPage(workbook.workbookId)"
            >
              <font-awesome-icon :icon="['fas', 'pen-to-square']" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex flex-row justify-end space-x-5 my-5">
      <button
        class="bg-secondary text-white rounded-lg px-4 py-2 hover:bg-primary"
        @click="fetchPrevPage"
      >
        <font-awesome-icon :icon="['fas', 'left-long']" />
      </button>

      <button
        class="bg-secondary text-white rounded-lg px-4 py-2 hover:bg-primary"
        @click="fetchNextPage"
      >
        <font-awesome-icon :icon="['fas', 'right-long']" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>

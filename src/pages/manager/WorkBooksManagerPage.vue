<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Workbook } from "@/types/Workbook";
import { WorkbookApis } from "@/apis/WorkbookApis";
import { emptyPage, Page } from "@/utils/PageUtil";

const headers: string[] = ["번호", "제목", "타입", "활성화", "수정일", "편집"];

const route = useRoute();
const workbooks = ref<Page<Workbook>>(emptyPage());

const moveToWorkbookEditPage = (workbookId: string) =>
  router.push(`/manager/workbooks/${workbookId}`);
const moveToWorkbookRegisterPage = () =>
  router.push("/manager/workbooks/registration");

onMounted(() => fetchWorkbooks());

const fetchWorkbooks = async (): Promise<void> => {
  await WorkbookApis.getWorkbooks(workbooks.value.number).then((res) => {
    workbooks.value = res;
    console.log(workbooks.value.content);
  });
};
</script>

<template>
  <div class="flex flex-col px-10">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-4xl text-left text-gray-600 px-10 py-5">
        {{ route.name }}
      </h1>
      <button
        class="bg-secondary text-white rounded-lg px-4 py-2 hover:bg-primary h-fit"
        @click="moveToWorkbookRegisterPage"
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
              @click="toggleProblemActiveness(workbook)"
              class="w-12 h-6 flex items-center cursor-pointer rounded-full"
              :class="workbook.isActive ? 'bg-secondary' : 'bg-gray-300'"
            >
              <div
                class="w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300"
                :class="workbook.isActive ? 'translate-x-6' : 'translate-x-2'"
              ></div>
            </div>
          </td>

          <td
            class="px-4 py-2 border border-gray-300"
            v-text="formatDate(workbook.updatedAt)"
          ></td>

          <td class="px4 border border-gray-300">
            <div
              :class="[
                'w-8 h-6  flex justify-center items-center mx-auto rounded-md ',
                'shadow transform transition-transform duration-300',
                'bg-secondary hover:bg-primary',
              ]"
              @click="moveToWorkbookEditPage(workbook.workbookId)"
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
        @click="fetchPostPage"
      >
        <font-awesome-icon :icon="['fas', 'right-long']" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>

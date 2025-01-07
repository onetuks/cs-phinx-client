<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { WorkBook } from "@/types/WorkBook";

const headers: string[] = ["문제집 번호", "문제집 제목"];

const route = useRoute();
const workBooks = ref<WorkBook[]>([]);

const moveToWorkBookEditPage = (workBookId: string) =>
  router.push(`/manager/workbooks/${workBookId}`);
const moveToWorkBookRegisterPage = () =>
  router.push("/manager/workbooks/registration");
</script>

<template>
  <div class="flex flex-col px-10">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-4xl text-left text-gray-600 px-10 py-5">
        {{ route.name }}
      </h1>
      <button
        class="bg-secondary text-white rounded-lg px-4 py-2 hover:bg-primary h-fit"
        @click="moveToWorkBookRegisterPage"
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
          v-for="(workBook, index) in workBooks"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td class="px-4 py-2 border border-gray-300">
            {{ workBook.workBookId }}
          </td>
          <td class="px-4 py-2 border border-gray-300">{{ workBook.title }}</td>
          <td
            class="px-4 py-2 border border-gray-300 flex justify-center items-center"
          >
            <div
              @click="toggleProblemActiveness(workBook)"
              class="w-12 h-6 flex items-center cursor-pointer rounded-full"
              :class="workBook.isActive ? 'bg-secondary' : 'bg-gray-300'"
            >
              <div
                class="w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300"
                :class="workBook.isActive ? 'translate-x-6' : 'translate-x-2'"
              ></div>
            </div>
          </td>
          <td class="px4 border border-gray-300">
            <div
              :class="[
                'w-8 h-6  flex justify-center items-center mx-auto rounded-md ',
                'shadow transform transition-transform duration-300',
                'bg-secondary hover:bg-primary',
              ]"
              @click="moveToWorkBookEditPage(workBook.workBookId)"
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

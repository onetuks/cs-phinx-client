<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Problem } from "@/types/Problem";
import { initialWorkBook, WorkBook } from "@/types/WorkBook";
import ProblemCandidatesTable from "@/pages/manager/components/ProblemCandidatesTable.vue";
import ManagerButton from "@/components/widgets/ManagerButton.vue";
import WorkBookInfoView from "@/pages/manager/components/WorkBookInfoView.vue";

const route = useRoute();
const workBook = ref<WorkBook>(initialWorkBook);
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

const updateWorkBook = (updatedWorkBook: WorkBook): void => {
  workBook.value = { ...updatedWorkBook };
  console.log(workBook.value);
};

const registerWorkBook = async (): Promise<void> => {};
const editWorkBook = async (): Promise<void> => {};
const removeWorkBook = async (): Promise<void> => {};
</script>

<template>
  <div class="px-10">
    <h1 class="text-4xl text-left text-gray-600 py-5">
      {{ route.name }}
    </h1>

    <work-book-info-view
      :work-book="workBook"
      @update:work-book="updateWorkBook"
    />

    <div
      class="mb-4 bg-secondary border border-gray-400 rounded-md px-5 py-2 flex flex-row justify-between space-x-4"
    >
      <problem-candidates-table
        title="포함된 문제"
        :problems="includedProblems"
        @toggle-problem="handleToggleProblem"
      />
      <problem-candidates-table
        title="미포함 문제"
        :problems="excludedProblems"
        @toggle-problem="handleToggleProblem"
      />
    </div>

    <div class="flex flex-row justify-end space-x-4" v-if="isForRegistration">
      <manager-button
        :click-button-type="'등록하기'"
        @click="registerWorkBook"
      />
    </div>
    <div class="flex flex-row justify-end space-x-4" v-else>
      <manager-button
        :click-button-type="'수정하기'"
        @click-button="editWorkBook"
      />
      <manager-button
        :click-button-type="'삭제하기'"
        @click-button="removeWorkBook"
      />
    </div>
  </div>
</template>

<style scoped></style>

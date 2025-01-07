<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { initialProblem, Problem } from "@/types/Problem";
import ManagerButton from "@/components/widgets/ManagerButton.vue";
import ProblemInfoView from "@/pages/manager/problems/components/ProblemInfoView.vue";

onMounted(() => console.log(route.params.problemId));

const route = useRoute();
const problem = ref<Problem>(initialProblem);

const isForRegistration: boolean = route.path.includes("/registration");

const updateProblem = (updatedProblem: Problem): void => {
  problem.value = { ...updatedProblem };
};

const registerProblem = async (): Promise<void> => {};
const editProblem = async (): Promise<void> => {};
const removeProblem = async (): Promise<void> => {};
</script>

<template>
  <div class="px-10">
    <h1 class="text-4xl text-left text-gray-600 py-5">
      {{ route.name }}
    </h1>

    <problem-info-view :problem="problem" @update:problem="updateProblem" />

    <div class="flex flex-row justify-end space-x-4" v-if="isForRegistration">
      <manager-button
        :click-button-type="'등록하기'"
        @click-button="registerProblem"
      />
    </div>
    <div class="flex flex-row justify-end space-x-4" v-else>
      <manager-button
        :click-button-type="'수정하기'"
        @click-button="editProblem"
      />
      <manager-button
        :click-button-type="'삭제하기'"
        @click-button="removeProblem"
      />
    </div>
  </div>
</template>

<style scoped></style>

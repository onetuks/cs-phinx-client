<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "@/router";
import { Problem } from "@/types/Problem";

onMounted(() => {
  fetchProblems(route.path);
});

const route = useRoute();

const headers = ["문제번호", "제목", "문제집번호", "활성화", "수정"] as const;
const problems = ref<Problem[]>([
  {
    problemId: "sfadljkdfsakjl",
    title: "제목",
    workBookId: "sfadljkdfsakjl",
    isActive: true,
  },
]); // todo: get problems

const fetchProblems = async (url: string): Promise<void> => {
  await fetch("/api/problems");
};

const toggleProblemActiveness = async (problem: Problem): Promise<void> => {
  const targetProblem = problems.value.find(
    (p) => p.problemId === problem.problemId
  );
  if (!targetProblem) return;
  targetProblem.isActive = !targetProblem.isActive;

  // todo: isActive patch request
};

const moveToProblemEditPage = (problemId: string) =>
  router.push(`/manager/problems/${problemId}`);
</script>

<template>
  <div class="flex flex-col px-10">
    <h1 class="text-4xl text-left text-gray-600 px-10 py-5">
      {{ route.name }}
    </h1>
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
          v-for="(problem, index) in problems"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td class="px-4 py-2 border border-gray-300">
            {{ problem.problemId }}
          </td>
          <td class="px-4 py-2 border border-gray-300">{{ problem.title }}</td>
          <td class="px-4 py-2 border border-gray-300">
            {{ problem.workBookId }}
          </td>
          <td
            class="px-4 py-2 border border-gray-300 flex justify-center items-center"
          >
            <div
              @click="toggleProblemActiveness(problem)"
              class="w-12 h-6 flex items-center cursor-pointer rounded-full"
              :class="problem.isActive ? 'bg-secondary' : 'bg-gray-300'"
            >
              <div
                class="w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300"
                :class="problem.isActive ? 'translate-x-6' : 'translate-x-2'"
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
              @click="moveToProblemEditPage(problem.problemId)"
            >
              <font-awesome-icon :icon="['fas', 'pen-to-square']" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

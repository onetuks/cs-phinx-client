<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "@/router";
import { Problem } from "@/types/Problem";
import { ProblemApis } from "@/apis/ProblemApis";
import { Page, PageUtil } from "@/utils/PageUtil";
import { AnswerTypeUtil } from "@/types/Answer";
import { PROBLEM_REMOVE_SUCCESS, toaster } from "@/utils/ToastUtil";
import { ProblemCommand } from "@/apis/commands/ProblemCommand";
import { DateUtil } from "@/utils/DateUtil";

const headers = [
  "문제번호",
  "제목",
  "난이도",
  "주제",
  "활성화",
  "수정일",
  "편집",
] as const;

const route = useRoute();
const problems = ref<Page<Problem>>(PageUtil.emptyPage());

const toggleProblemActiveness = async (problem: Problem): Promise<void> => {
  const targetProblem = problems.value.content.find((p) => {
    return p.problemId === problem.problemId;
  });
  if (!targetProblem) return;
  targetProblem.isActive = !targetProblem.isActive;

  await ProblemApis.patchProblem(
    problem.problemId,
    ProblemCommand.fromProblem(problem)
  );
};

const removeProblem = async (problemId: number): Promise<void> => {
  await ProblemApis.deleteProblem(problemId).then(() => {
    toaster.success(PROBLEM_REMOVE_SUCCESS);
  });
};

const moveToProblemEditPage = (problemId: number) =>
  router.push(`/manager/problems/${problemId}`);
const moveToProblemRegisterPage = () =>
  router.push("/manager/problems/registration");

onMounted(() => fetchProblems());

const fetchProblems = async () => {
  await ProblemApis.getProblems(
    AnswerTypeUtil.toAnswerType(route.fullPath),
    problems.value.number
  ).then((res) => {
    problems.value = res;
  });
};
const fetchPrevPage = () => {};
const fetchNextPage = () => {};
</script>

<template>
  <div class="flex flex-col px-10">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-4xl text-left text-gray-600 px-10 py-5">
        {{ route.name }}
      </h1>
      <button
        class="bg-secondary text-white rounded-lg px-4 py-2 hover:bg-primary h-fit"
        @click="moveToProblemRegisterPage"
      >
        문제 등록하기
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
          v-for="(problem, index) in problems.content"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td class="px-4 py-2 border border-gray-300">
            {{ problem.problemId }}
          </td>
          <td class="px-4 py-2 border border-gray-300">{{ problem.title }}</td>
          <td class="px-4 py-2 border border-gray-300">
            {{ problem.difficulty }}
          </td>
          <td class="px-4 py-2 border border-gray-300">{{ problem.topic }}</td>
          <td class="px-4 py-2 border border-gray-300">
            <div class="flex flex-grow items-center justify-center">
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
            </div>
          </td>
          <td
            class="px-4 py-2 border border-gray-300"
            v-text="DateUtil.formatDate(problem.updatedAt)"
          ></td>
          <td class="px-4 py-2 border border-gray-300">
            <div class="flex flex-grow justify-between">
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

              <div
                :class="[
                  'w-8 h-6  flex justify-center items-center mx-auto rounded-md ',
                  'shadow transform transition-transform duration-300',
                  'bg-secondary hover:bg-primary',
                ]"
                @click="removeProblem(problem.problemId)"
              >
                <font-awesome-icon :icon="['fas', 'trash']" />
              </div>
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

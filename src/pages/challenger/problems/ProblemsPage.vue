<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Problem } from "@/types/Problem";
import { Page, PageUtil } from "@/utils/PageUtil";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ProblemManipulator } from "@/pages/manipulator/ProblemManipulator";
import ProblemListView from "@/pages/challenger/problems/ProblemListView.vue";
import { AnswerType } from "@/types/Answer";

onMounted(async () => {
  problems.value = await ProblemManipulator.fetchProblems(
    selectedAnswerType.value,
    problems.value.number,
  );
});

const searchKeyword = ref<string>("");
const selectedAnswerType = ref<AnswerType | undefined>(undefined);
const problems = ref<Page<Problem>>(PageUtil.emptyPage());

async function searchWithKeyword(): Promise<void> {
  searchKeyword.value = searchKeyword.value.trim();
  if (searchKeyword.value.length <= 1) {
    problems.value = await ProblemManipulator.fetchProblems(
      selectedAnswerType.value,
      problems.value.number,
    );
  }
}
</script>

<template>
  <div class="my-8">
    <!-- 검색창 -->
    <div class="relative">
      <input
        v-model="searchKeyword"
        class="border border-gray-200 p-3 w-full rounded-md bg-white"
        placeholder="풀고 싶은 문제 제목 검색"
        type="text"
      />
      <button class="icon" @click="searchWithKeyword">
        <font-awesome-icon
          class="text-gray-200 text-lg"
          icon="fa-solid fa-search"
        />
      </button>
    </div>

    <div class="flex justify-end p-3 gap-5">
      <!--  문제집 종류 선택   -->
      <select v-model="selectedAnswerType">
        <option
          v-for="answerType in [...AnswerType.values(), undefined]"
          :key="answerType"
          :value="answerType"
          v-text="
            answerType === undefined ? '전체' : AnswerType.valueOf(answerType)
          "
        />
      </select>
    </div>

    <!--  문제 목록  -->
    <div>
      <ProblemListView :problems="problems.content" />
    </div>
  </div>
</template>

<style scoped></style>

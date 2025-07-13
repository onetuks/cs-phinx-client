<script lang="ts" setup>
import { Problem, Topic } from "@/types/Problem";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onMounted, ref, watch } from "vue";
import { RouteUtil } from "@/utils/RouteUtil";
import { useProblemsStore } from "@/stores/Problems";
import { useWorkbookStore } from "@/stores/Workbook";

type OrderType = "기본" | "가나다" | "난이도" | "토픽";
const OrderTypes = ["기본", "가나다", "난이도", "토픽"];

const problemsStore = useProblemsStore();
const workbookStore = useWorkbookStore();

const props = defineProps<{
  workbookId: number;
  problems: Problem[];
}>();

const selectedOrderType = ref<OrderType>("기본");
const localProblems = ref<Problem[]>([]);

function onTopicChange() {
  switch (selectedOrderType.value) {
    case "가나다":
      localProblems.value.sort((a: Problem, b: Problem) =>
        a.title.localeCompare(b.title)
      );
      break;
    case "난이도":
      const difficultyOrder = { EASY: 1, MEDIUM: 2, HARD: 3 };
      localProblems.value.sort(
        (a: Problem, b: Problem) =>
          difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
      );
      break;
    case "토픽":
      localProblems.value.sort((a: Problem, b: Problem) =>
        a.topic.localeCompare(b.topic)
      );
      break;
  }
}

watch(
  () => props.problems,
  (newProblems) => {
    localProblems.value = [...newProblems];
    problemsStore.setProblems(localProblems.value);
    workbookStore.setWorkbookId(props.workbookId);
  },
  { immediate: true }
);

onMounted(() => {
  localProblems.value = [...props.problems];
  problemsStore.setProblems(localProblems.value);
  workbookStore.setWorkbookId(props.workbookId);
});
</script>

<template>
  <div class="flex flex-col bg-white rounded-lg">
    <div class="flex flex-row h-8 items-center justify-between px-3 mb-3">
      <h1
        class="font-bold text-lg text-primary"
        v-text="`${problems.length}문제`"
      />

      <select v-model="selectedOrderType" @change="onTopicChange">
        <option
          v-for="orderType in OrderTypes"
          :key="orderType"
          :value="orderType"
          v-text="orderType"
        />
      </select>
    </div>

    <div class="flex flex-row h-8 items-center border-b-2 border-gray-200">
      <p class="text-gray-500 font-bold w-16">상태</p>
      <p class="text-gray-500 font-bold min-w-56">제목</p>
      <p class="text-gray-500 font-bold w-20">난이도</p>
      <p class="text-gray-500 font-bold w-20">완료한 사람</p>
      <p class="text-gray-500 font-bold w-20">정답률</p>
    </div>

    <div
      v-for="problem in localProblems"
      :key="problem.problemId"
      class="flex flex-row h-10 items-center py-1 border-b-[1px] border-gray-200 hover:bg-gray-100 transition-colors duration-200"
      @click="RouteUtil.moveToProblemPage(problem.problemId)"
    >
      <div class="flex-shrink-0 w-16 flex justify-center items-center">
        <font-awesome-icon :icon="['fas', 'check']" class="text-primary" />
      </div>
      <div class="min-w-56 flex-shrink-0">
        <h1 class="min-w-56 flex-shrink-0" v-text="problem.title" />
        <p
          class="min-w-56 text-xs flex-shrink-0 text-gray-500"
          v-text="Topic.valueOf(problem.topic)"
        />
      </div>
      <p
        :class="{
          'text-red-500': problem.difficulty === 'HARD',
          'text-yellow-500': problem.difficulty === 'MEDIUM',
          'text-green-500': problem.difficulty === 'EASY',
        }"
        class="text-gray-500 w-20"
        v-text="problem.difficulty"
      />
      <p class="text-gray-500 w-20">완료한 사람</p>
      <p class="text-gray-500 w-20">정답률</p>
    </div>
  </div>
</template>

<style scoped></style>

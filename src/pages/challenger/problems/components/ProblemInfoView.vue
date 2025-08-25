<script lang="ts" setup>
import {Problem} from "@/types/Problem";

defineProps<{
  problem: Problem;
}>();
</script>

<template>
  <div class="flex flex-col bg-white rounded-lg text-left p-5">
    <!--  Title  -->
    <h3 v-text="problem.title" />

    <!--  Topic & Difficulty -->
    <div class="flex flex-grow gap-5 my-3 justify-between">
      <div
        class="bg-primary rounded-lg p-1 px-2 text-white w-fit h-fit"
        v-text="problem.topic"
      />
      <p
        :class="{
          'text-red-500': problem.difficulty === 'HARD',
          'text-yellow-500': problem.difficulty === 'MEDIUM',
          'text-green-500': problem.difficulty === 'EASY',
        }"
        class="text-gray-500 w-20"
        v-text="problem.difficulty"
      />
    </div>

    <!--  Description  -->
    <p class="my-3" v-text="problem.description" />

    <div class="bg-gray-300 h-0.5 my-3" />

    <!--  TAG  -->
    <div class="flex flex-col">
      <h4>관련 태그</h4>
      <div class="flex flex-wrap gap-2 my-3 h-fit">
        <div
          v-for="tag in problem.tags"
          class="text-white bg-primary rounded-md px-3 py-1 h-fit"
          v-text="tag"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import StaticsCard from "@/components/widgets/StaticsCard.vue";

const workBookCounts: number = 102;
const problemCounts: number = 1042;
const userCounts: number = 12;
const questionCounts: number = 45;
</script>

<template>
  <div class="flex flex-row justify-between space-x-4 px-48 pt-56">
    <StaticsCard :content="workBookCounts" title="문제집 수" />
    <StaticsCard :content="problemCounts" title="문제 수" />
    <StaticsCard :content="userCounts" title="유저 수" />
    <StaticsCard :content="questionCounts" title="질문 수" />
  </div>
</template>

<style scoped></style>

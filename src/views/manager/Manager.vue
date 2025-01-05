<script setup lang="ts">
import StaticsCard from "@/components/widgets/StaticsCard.vue";

const workBookCounts: number = 102;
const problemCounts: number = 1042;
const userCounts: number = 12;
const questionCounts: number = 45;
</script>

<template>
  <div class="flex flex-row justify-between space-x-4 px-48 pt-56">
    <StaticsCard title="문제집 수" :content="workBookCounts" />
    <StaticsCard title="문제 수" :content="problemCounts" />
    <StaticsCard title="유저 수" :content="userCounts" />
    <StaticsCard title="질문 수" :content="questionCounts" />
  </div>
</template>

<style scoped></style>

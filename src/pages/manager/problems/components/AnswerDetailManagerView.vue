<script setup lang="ts">
import AnswerDetailInfoView from "@/pages/manager/problems/components/AnswerDetailInfoView.vue";
import { Answer } from "@/types/Answer";

const answer = defineModel("answer", {
  required: true,
  type: Object as () => Answer,
});
</script>

<template>
  <div class="w-full h-fit border border-primary rounded-md py-5">
    <answer-detail-info-view v-model:answer="answer" />
  </div>
</template>

<style scoped></style>

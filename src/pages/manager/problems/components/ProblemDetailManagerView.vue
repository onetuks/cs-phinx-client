<script setup lang="ts">
import ProblemDetailInfoView from "@/pages/manager/problems/components/ProblemDetailInfoView.vue";
import { Problem } from "@/types/Problem";

const problem = defineModel("problem", {
  required: true,
  type: Object as () => Problem,
});
</script>

<template>
  <div class="w-full h-fit border border-primary rounded-md py-5">
    <problem-detail-info-view v-model:problem="problem" />
  </div>
</template>

<style scoped></style>

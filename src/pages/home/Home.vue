<script lang="ts" setup>
import { ref } from "vue";
import DailyChallengeView from "@/pages/home/components/DailyChallengeView.vue";
/*
1. 데일리 도전과제
2. 스크롤 태우기 / 파피루스 찢기
3. 검색창
4. 검색 필터
5. 목록 / 리스트
 */

const isWorkbookMode = ref<boolean>(true);
</script>

<template>
  <div>
    <DailyChallengeView />
    <!--    <ChallengeModeSettingView v-on="isWorkbookMode" />-->
    <!--    <WorkbookChallengeView v-if="isWorkbookMode" />-->
    <!--    <ProblemChallengeView v-else />-->
  </div>
</template>

<style scoped></style>

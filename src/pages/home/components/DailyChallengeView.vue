<script lang="ts" setup>
import { DailyChallenge } from "@/types/DailyChallenge";
import { ref } from "vue";
import DailyChallengeIcon from "@/pages/home/components/DailyChallengeIcon.vue";

const dailyChallenge = ref<DailyChallenge>(
  DailyChallenge.initialDailyChallenge,
);
</script>

<template>
  <div
    class="bg-white flex flex-col justify-center items-center rounded-lg shadow-lg my-3 @container"
  >
    <div class="bg-primary p-3 flex flex-grow w-full rounded-t-lg">
      <h4 class="text-white">데일리 챌린지</h4>
    </div>
    <div
      class="py-10 grid gap-10 @max-sm:grid-cols-1 @sm:grid-cols-3 @min-2xl:grid-cols-5"
    >
      <DailyChallengeIcon
        :isCompleted="dailyChallenge.problemChallengeCompletion"
        name="파피루스 찢기"
      />
      <DailyChallengeIcon
        :isCompleted="!dailyChallenge.workbookChallengeCompletion"
        name="코덱스 뜯기"
      />
      <DailyChallengeIcon
        :isCompleted="dailyChallenge.checkReportChallengeCompletion"
        name="스핑크스 훈수듣기"
      />
    </div>
  </div>
</template>

<style scoped></style>

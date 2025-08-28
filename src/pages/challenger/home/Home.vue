<script lang="ts" setup>
import DailyChallengeView from "@/pages/challenger/home/components/DailyChallengeView.vue";
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import WorkbooksPage from "@/pages/challenger/workbooks/WorkbooksPage.vue";
import ProblemsPage from "@/pages/challenger/problems/ProblemsPage.vue";

type ChallengeMode = "파피루스" | "코덱스";

const challengeMode = ref<ChallengeMode>("코덱스");

function isCodexMode() {
  return challengeMode.value === "코덱스";
}

function setPapyrusMode() {
  challengeMode.value = "파피루스";
}

function setCodexMode() {
  challengeMode.value = "코덱스";
}
</script>

<template>
  <div>
    <daily-challenge-view />
    <div class="w-full flex justify-between mb-3 gap-5">
      <button
        :class="challengeMode === '코덱스' ? 'bg-primary' : 'bg-secondary'"
        class="big"
        @click="setCodexMode()"
      >
        <font-awesome-icon icon="fa-solid fa-book" />
        코덱스 모드
      </button>
      <button
        :class="challengeMode !== '코덱스' ? 'bg-primary' : 'bg-secondary'"
        class="big"
        @click="setPapyrusMode()"
      >
        <font-awesome-icon icon="fa-solid fa-scroll" />
        파피루스 모드
      </button>
    </div>
    <workbooks-page v-if="isCodexMode()" />
    <problems-page v-else />
  </div>
</template>

<style scoped></style>

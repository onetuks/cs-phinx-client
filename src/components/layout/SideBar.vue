<script setup lang="ts">
import SideBarMainTab from "@/components/layout/components/SideBarMainTab.vue";
import SideBarSubTab from "@/components/layout/components/SideBarSubTab.vue";
import {
  SideBarMainTabs,
  SideBarSubTabs,
} from "@/components/layout/types/SideBarTab";
</script>

<template>
  <div class="w-56 min-h-screen bg-white border-b border-b-gray-300">
    <side-bar-main-tab :tab-type="SideBarMainTabs.WORKBOOK_MANAGEMENT" />
    <side-bar-main-tab :tab-type="SideBarMainTabs.PROBLEM_MANAGEMENT" />
    <side-bar-sub-tab :tab-type="SideBarSubTabs.CHOICE_PROB_MANAGEMENT" />
    <side-bar-sub-tab :tab-type="SideBarSubTabs.SHORT_PROB_MANAGEMENT" />
    <side-bar-sub-tab :tab-type="SideBarSubTabs.DESCRIPTION_MANAGEMENT" />
    <side-bar-main-tab :tab-type="SideBarMainTabs.USER_MANAGEMENT" />
    <side-bar-main-tab :tab-type="SideBarMainTabs.QUESTION_MANAGEMENT" />
  </div>
</template>

<style scoped></style>

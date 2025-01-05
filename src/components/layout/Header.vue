<script setup lang="ts">
import LayoutButton from "@/components/icons/LayoutButton.vue";
import LayoutTab from "@/components/icons/LayoutTab.vue";
import router from "@/router";
import { LayoutTabs } from "@/components/icons/LayoutTab";

const moveToHome = () => router.push("/");
</script>

<template>
  <div
    class="sticky top-0 bg-white border-b border-b-gray-300 h-16 flex flex-row justify-between items-center px-56"
  >
    <div
      class="cursor-pointer flex flex-row justify-between items-center space-x-4"
      @click="moveToHome"
    >
      <img src="@/assets/img/logo.png" alt="logo" class="w-14 ml-4" />
      <div>
        <p class="text-xs">CS 물어보는</p>
        <p class="text-base pl-2 text-primary">스핑크스</p>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center h-full">
      <layout-tab :tab="LayoutTabs.COLLECTION" />
      <layout-tab :tab="LayoutTabs.ANALYSIS" />
    </div>
    <layout-button :button-type="'LOGIN'" />
  </div>
</template>

<style scoped></style>

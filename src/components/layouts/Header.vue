<script lang="ts" setup>
import LayoutButton from "@/components/layouts/components/LayoutButton.vue";
import LayoutTab from "@/components/layouts/components/LayoutTab.vue";
import { LayoutTabs } from "@/components/layouts/types/LayoutTab";
import { RouteUtil } from "@/utils/RouteUtil";
import { UserRoleUtil } from "@/utils/UserRoleUtil";
</script>

<template>
  <div
    class="border-b border-b-gray-300 h-16 flex flex-row justify-between items-center px-40"
  >
    <div
      class="cursor-pointer flex flex-row justify-between items-center space-x-4"
      @click="RouteUtil.moveToPage('/')"
    >
      <img alt="logo" class="w-14 ml-4" src="@/assets/img/logo.png" />
      <div>
        <p class="text-xs">CS 물어보는</p>
        <p class="text-base pl-2 text-primary">스핑크스</p>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center h-full">
      <layout-tab :tab="LayoutTabs.COLLECTION" />
      <layout-tab :tab="LayoutTabs.ANALYSIS" />
    </div>
    <div class="flex flex-row space-x-4">
      <layout-button
        v-show="UserRoleUtil.isManager()"
        :button-type="'MANAGEMENT'"
        :class="UserRoleUtil.isManager() ? 'visible' : 'invisible'"
      />
      <layout-button :button-type="'LOGIN'" />
    </div>
  </div>
</template>

<style scoped></style>

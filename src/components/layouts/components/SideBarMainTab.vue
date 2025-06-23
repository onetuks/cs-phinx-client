<script setup lang="ts">
import { SideBarMainTab } from "@/components/layouts/types/SideBarTab";
import { RouteUtil } from "@/utils/RouteUtil";
import router from "@/router";

const props = defineProps<{
  tabType: SideBarMainTab;
}>();

const isTabFocused = (): boolean => {
  const route = router.currentRoute.value;
  return route.fullPath.includes(props.tabType.path);
};
</script>

<template>
  <div
    class="cursor-pointer h-12 border-b border-b-gray-500 flex flex-row items-center justify-start pl-4 text-lg text-gray-400 hover:text-primary"
    :class="isTabFocused() ? 'text-primary' : 'text-gray-400'"
    @click="RouteUtil.moveToPage(tabType.path)"
  >
    {{ tabType.name }}
  </div>
</template>

<style scoped></style>

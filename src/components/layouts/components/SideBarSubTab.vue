<script setup lang="ts">
import { SideBarSubTab } from "@/components/layouts/types/SideBarTab";
import router from "@/router";
import { RouteUtil } from "@/utils/RouteUtil";

const props = defineProps<{
  tabType: SideBarSubTab;
}>();

const isTabFocused = (): boolean => {
  const route = router.currentRoute.value;
  return route.path.includes(props.tabType.path);
};
</script>

<template>
  <div
    class="cursor-pointer h-8 border-b border-b-gray-300 flex flex-row items-center justify-start pl-8 text-gray-400 hover:text-primary"
    :class="isTabFocused() ? 'text-primary' : 'text-gray-400'"
    @click="RouteUtil.moveToPage(tabType.path)"
  >
    {{ tabType.name }}
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { SideBarMainTab } from "@/components/layout/types/SideBarTab";
import { useRoute } from "vue-router";
import router from "@/router";

const props = defineProps<{
  tabType: SideBarMainTab;
}>();

const route = useRoute();

const isTabFocused = (): boolean => route.path.includes(props.tabType.path);

const moveToPage = () => router.push(props.tabType.path);
</script>

<template>
  <div
    class="cursor-pointer h-12 border-b border-b-gray-500 flex flex-row items-center justify-start pl-4 text-lg text-gray-400 hover:text-primary"
    :class="isTabFocused() ? 'text-primary' : 'text-gray-400'"
    @click="moveToPage"
  >
    {{ tabType.name }}
  </div>
</template>

<style scoped></style>

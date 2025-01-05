<script setup lang="ts">
import { SideBarSubTab } from "@/components/layouts/types/SideBarTab";
import { useRoute } from "vue-router";
import router from "@/router";

const props = defineProps<{
  tabType: SideBarSubTab;
}>();

const route = useRoute();

const isTabFocused = (): boolean => route.path.includes(props.tabType.path);

const moveToPage = () => router.push(props.tabType.path);
</script>

<template>
  <div
    class="cursor-pointer h-8 border-b border-b-gray-300 flex flex-row items-center justify-start pl-8 text-gray-400 hover:text-primary"
    :class="isTabFocused() ? 'text-primary' : 'text-gray-400'"
    @click="moveToPage"
  >
    {{ tabType.name }}
  </div>
</template>

<style scoped></style>

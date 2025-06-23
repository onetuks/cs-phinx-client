<script setup lang="ts">
import { computed } from "vue";
import { LayoutTab } from "@/components/layouts/types/LayoutTab";
import router from "@/router";
import { RouteUtil } from "@/utils/RouteUtil";

const props = defineProps<{
  tab: LayoutTab;
}>();

const isButtonFocused = computed(() => {
  const route = router.currentRoute.value;
  return route.path.includes(props.tab.path);
});
</script>

<template>
  <div class="h-full w-full flex flex-col justify-center items-center group">
    <button
      class="text-center text-gray-500 w-24 h-full group-hover:text-black"
      :class="isButtonFocused ? '!text-black' : 'text-gray-500'"
      @click="RouteUtil.moveToPage(tab.path)"
    >
      {{ props.tab.name }}
    </button>
    <div
      class="h-1 w-full transition-all duration-300"
      :class="
        isButtonFocused
          ? 'bg-primary'
          : 'bg-transparent group-hover:bg-secondary'
      "
    />
  </div>
</template>

<style scoped></style>

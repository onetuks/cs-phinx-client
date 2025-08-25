<script lang="ts" setup>
import {computed} from "vue";
import {LayoutTab} from "@/components/layouts/types/LayoutTab";
import router from "@/router";
import {RouteUtil} from "@/utils/RouteUtil";

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
      :class="isButtonFocused ? '!text-black' : 'text-gray-500'"
      class="tab"
      @click="RouteUtil.moveToPage(tab.path)"
    >
      {{ props.tab.name }}
    </button>
    <div
      :class="
        isButtonFocused
          ? 'bg-primary'
          : 'bg-transparent group-hover:bg-secondary'
      "
      class="h-1 w-full transition-all duration-300"
    />
  </div>
</template>

<style scoped></style>

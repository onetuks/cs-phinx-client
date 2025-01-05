<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { LayoutTab } from "@/components/icons/LayoutTab";
import router from "@/router";

const props = defineProps<{
  tab: LayoutTab;
}>();

const route = useRoute();

const isButtonFocused = computed(() => route.path.includes(props.tab.path));

const moveToPage = () => router.push(props.tab.path);
</script>

<template>
  <div class="h-full w-full flex flex-col justify-center items-center group">
    <button
      class="text-center text-gray-500 w-24 h-full group-hover:text-black"
      :class="isButtonFocused ? '!text-black' : 'text-gray-500'"
      @click="moveToPage"
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

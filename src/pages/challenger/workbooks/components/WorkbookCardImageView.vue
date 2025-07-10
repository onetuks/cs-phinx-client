<script lang="ts" setup>
import { CollectionType, Workbook } from "@/types/Workbook";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps<{
  workbook: Workbook;
}>();
</script>

<template>
  <div class="relative flex flex-col flex-grow rounded-lg">
    <img
      alt="workbook image"
      class="rounded-t-lg h-56"
      src="@/assets/img/slate.jpg"
    />

    <div
      class="absolute top-0 left-0 z-10 flex flex-row w-full justify-between px-5 py-2 bg-white/50 rounded-t-lg items-center"
    >
      <div
        class="bg-primary px-2 py-1 rounded-lg text-white"
        v-text="CollectionType.valueOf(workbook.collectionType)"
      ></div>
      <font-awesome-icon
        v-if="true"
        :icon="['fas', 'check-to-slot']"
        class="text-primary text-2xl"
      />
    </div>
  </div>
</template>

<style scoped></style>

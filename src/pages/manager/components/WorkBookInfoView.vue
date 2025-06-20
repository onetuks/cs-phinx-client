<script setup lang="ts">
import { ref, watch } from "vue";
import { initialWorkbook, Workbook } from "@/types/Workbook";

const props = defineProps<{
  workbook: Workbook;
}>();
const emits = defineEmits<{
  (event: "update:workbook", workbook: Workbook): void;
}>();

const localWorkbook = ref<Workbook>(initialWorkbook);

const toggleIsActive = (): void => {
  localWorkbook.value.isActive = !localWorkbook.value.isActive;
};

watch(
  () => props.workbook,
  (newVal) => (localWorkbook.value = { ...newVal })
);
watch(
  () => localWorkbook.value,
  (newVal) => {
    if (localWorkbook.value === newVal) {
      return;
    }
    emits("update:workbook", newVal);
  },
  { deep: true }
);
</script>

<template>
  <div>
    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2"
    >
      <label class="block text-sm mb-1">문제집번호</label>
      <input
        v-model="localWorkbook.workbookId"
        type="text"
        class="border px-2 py-1 w-full"
        disabled
      />
    </div>

    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2"
    >
      <label class="block text-sm mb-1">제목</label>
      <input
        v-model="localWorkbook.title"
        type="text"
        class="border px-2 py-1 w-full"
      />
    </div>

    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2"
    >
      <label class="block text-sm font-medium mb-1">본문</label>
      <textarea
        v-model="localWorkbook.description"
        class="border px-2 py-1 w-full"
        rows="5"
        placeholder="문제집 설명을 입력해주세요."
      ></textarea>
    </div>

    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2 flex flex-row justify-between"
    >
      활성화
      <div
        @click="toggleIsActive"
        class="w-12 h-6 flex items-center cursor-pointer rounded-full"
        :class="localWorkbook.isActive ? 'bg-primary' : 'bg-gray-300'"
      >
        <div
          class="w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300"
          :class="localWorkbook.isActive ? 'translate-x-6' : 'translate-x-2'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

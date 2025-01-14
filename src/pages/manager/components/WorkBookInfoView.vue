<script setup lang="ts">
import { initialWorkBook, WorkBook } from "@/types/WorkBook";
import { ref, watch } from "vue";

const props = defineProps<{
  workBook: WorkBook;
}>();
const emits = defineEmits<{
  (event: "update:workBook", workBook: WorkBook): void;
}>();

const localWorkBook = ref<WorkBook>(initialWorkBook);

const toggleIsActive = (): void => {
  localWorkBook.value.isActive = !localWorkBook.value.isActive;
};

watch(
  () => props.workBook,
  (newVal) => (localWorkBook.value = { ...newVal })
);
watch(
  () => localWorkBook.value,
  (newVal) => emits("update:workBook", newVal),
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
        v-model="localWorkBook.workBookId"
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
        v-model="localWorkBook.title"
        type="text"
        class="border px-2 py-1 w-full"
      />
    </div>

    <div
      class="mb-4 text-start bg-secondary border border-gray-400 rounded-md px-5 py-2 flex flex-row justify-between"
    >
      활성화
      <div
        @click="toggleIsActive"
        class="w-12 h-6 flex items-center cursor-pointer rounded-full"
        :class="localWorkBook.isActive ? 'bg-primary' : 'bg-gray-300'"
      >
        <div
          class="w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300"
          :class="localWorkBook.isActive ? 'translate-x-6' : 'translate-x-2'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import LayoutButton from "@/components/layouts/components/LayoutButton.vue";
</script>

<template>
  <div class="bg-gray-300 border-t border-t-black px-60 py-5 sticky bottom-0">
    <div class="flex flex-row justify-between">
      <p>
        Developer:
        <a
          href="https://github.com/onetuks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Se-Young Park
        </a>
      </p>
      <div class="flex flex-row justify-between items-center space-x-4">
        <layout-button :button-type="'FEEDBACK'" />
        <layout-button :button-type="'LINK_SHARE'" />
      </div>
    </div>
    <div class="my-3 border-t border-t-gray-400 pt-2">
      <p class="text-xs text-gray-400">
        본 사이트의 콘텐츠는 저작권법의 보호를 받으며, 저작자의 사전 동의 없는
        무단 복제/복사/배포를 금지합니다. Copyright @onetuks
      </p>
    </div>
  </div>
</template>

<style scoped></style>

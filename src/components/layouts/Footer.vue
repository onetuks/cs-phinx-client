<script lang="ts" setup>
import LayoutButton from "@/components/layouts/components/LayoutButton.vue";
</script>

<template>
  <div class="border-t border-t-gray-300 py-5 px-40 bg-white">
    <div class="flex flex-row justify-between">
      <p class="opacity-85">
        Developer:
        <a
          href="https://github.com/onetuks"
          rel="noopener noreferrer"
          target="_blank"
        >
          Se-Young Park
        </a>
      </p>
      <div class="flex flex-row justify-between items-center space-x-4">
        <layout-button :button-type="'FEEDBACK'" />
        <layout-button :button-type="'LINK_SHARE'" />
      </div>
    </div>
    <div class="my-3 border-t border-t-gray-200 pt-2">
      <p class="text-xs text-gray-400">
        본 사이트의 콘텐츠는 저작권법의 보호를 받으며, 저작자의 사전 동의 없는
        무단 복제/복사/배포를 금지합니다. Copyright @onetuks
      </p>
    </div>
  </div>
</template>

<style scoped></style>

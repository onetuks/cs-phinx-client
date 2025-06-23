<script setup lang="ts">
import router from "@/router";
import { toaster } from "@/utils/ToastUtil";

type LayoutButtonType =
  | "FEEDBACK"
  | "LINK_SHARE"
  | "LOGIN"
  | "LOGOUT"
  | "MANAGEMENT";

defineProps<{
  buttonType: LayoutButtonType;
}>();

const mapToLabel = (buttonType: LayoutButtonType): string => {
  switch (buttonType) {
    case "FEEDBACK":
      return "피드백 보내기";
    case "LINK_SHARE":
      return "공유하기";
    case "LOGIN":
      return "로그인";
    case "LOGOUT":
      return "로그아웃";
    case "MANAGEMENT":
      return "매니저 시스템";
    default:
      return "Invalid";
  }
};

const handleClick = async (buttonType: LayoutButtonType): Promise<void> => {
  switch (buttonType) {
    case "FEEDBACK":
      await navigator.clipboard.writeText("onetuks@naver.com");
      toaster.success("개발자 이메일이 클립보드에 복사되었습니다!");
      break;
    case "LINK_SHARE":
      await navigator.clipboard.writeText(window.location.href);
      toaster.success("스핑크스 URL이 클립보드에 복사되었습니다!");
      break;
    case "LOGIN":
      await router.push("/login");
      break;
    case "LOGOUT":
      await router.push("/logout");
      break;
    case "MANAGEMENT":
      await router.push("/manager");
      break;
    default:
      console.error("Invalid handle Click");
  }
};
</script>

<template>
  <button
    :class="[
      'bg-primary text-white text-sm w-fit px-2 py-1 rounded-md',
      'hover:bg-secondary hover:text-primary',
      'active:bg-secondary active:text-primary',
    ]"
    @click="handleClick(buttonType)"
  >
    {{ mapToLabel(buttonType) }}
  </button>
</template>

<style scoped></style>

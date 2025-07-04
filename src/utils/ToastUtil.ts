import { useToast } from "vue-toastification";

export const toaster = useToast();

// Answer
export const INVALID_ANSWER_COMMAND =
  "답안 정보가 충분히 기입되지 않았습니다" as const;
export const ANSWER_REGISTER_SUCCESS =
  "답안이 성공적으로 등록되었습니다" as const;
export const ANSWER_EDIT_SUCCESS = "답안이 성공적으로 수정되었습니다" as const;
export const ANSWER_REMOVE_SUCCESS =
  "답안이 성공적으로 삭제되었습니다" as const;

// Problem
export const INVALID_PROBLEM_COMMAND =
  "문제 정보가 충분히 기입되지 않았습니다" as const;
export const PROBLEM_REGISTER_SUCCESS =
  "문제가 성공적으로 등록되었습니다" as const;
export const PROBLEM_EDIT_SUCCESS = "문제가 성공적으로 수정되었습니다" as const;
export const PROBLEM_REMOVE_SUCCESS =
  "문제가 성공적으로 삭제되었습니다" as const;

// Workbook
export const INVALID_WORKBOOK_COMMAND =
  "문제집 정보가 충분히 기입되지 않았습니다" as const;
export const WORKBOOK_REGISTER_SUCCESS =
  "문제집이 성공적으로 등록되었습니다" as const;
export const WORKBOOK_EDIT_SUCCESS =
  "문제집이 성공적으로 수정되었습니다" as const;
export const WORKBOOK_REMOVE_SUCCESS =
  "문제집이 성공적으로 삭제되었습니다" as const;

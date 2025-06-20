import { Problem } from "@/types/Problem";

export interface Workbook {
  workbookId: number;
  title: string;
  description: string;
  collectionType: CollectionType;
  includedProblems: Problem[];
  isActive: boolean;
  updatedAt: Date;
}

export const initialWorkbook: Workbook = {
  workbookId: -1,
  title: "",
  description: "",
  collectionType: "TOPIC_POINT",
  includedProblems: [],
  isActive: true,
  updatedAt: new Date(),
};

export type ClickButtonType = "등록하기" | "수정하기" | "삭제하기";
export type CollectionType =
  | "TOPIC_POINT" // 과목별 싹싹 모음집
  | "QUICK_POINT" // 시험 직전 쓱쓱 모음집
  | "KEY_POINT" // 핵심 쏙쏙 모음집
  | "TRAP_POINT" // 함정 쑥쑥 모음집
  | "DAILY_POINT"; // 오늘 쓱싹 모음집

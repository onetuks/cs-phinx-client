export interface WorkBook {
  workBookId: string;
  title: string;
  isActive: boolean;
}

export const initialWorkBook: WorkBook = {
  workBookId: "",
  title: "",
  isActive: true,
};

export type ClickButtonType = "등록하기" | "수정하기" | "삭제하기";

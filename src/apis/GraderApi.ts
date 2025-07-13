import { put } from "@/utils/ApiRequestUtil";

const BASE_URI = "/graders" as const;

export const GraderApi = {
  putUserAnswer: async (
    answerId: number,
    userAnswer: string
  ): Promise<number> => {
    return await put(`${BASE_URI}?answer-id=${answerId}`, userAnswer);
  },
};

import { Problem } from "@/types/Problem";
import { Answer, AnswerType } from "@/types/Answer";
import { DateUtil } from "@/utils/DateUtil";

export interface AnswerResponse {
  answerId: number;
  problem: Problem;
  answerType: AnswerType;
  answerValues: string[];
  updatedAt: string;
}

export const AnswerResponse = {
  toAnswer: (answerResponse: AnswerResponse): Answer => {
    return {
      answerId: answerResponse.answerId,
      problemId: answerResponse.problem.problemId,
      answerType: answerResponse.answerType,
      answerValues: answerResponse.answerValues,
      updatedAt: DateUtil.toDate(answerResponse.updatedAt),
    };
  },
};

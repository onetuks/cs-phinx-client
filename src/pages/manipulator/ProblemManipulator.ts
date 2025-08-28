import { Problem } from "@/types/Problem";
import { Answer, AnswerType } from "@/types/Answer";
import { ProblemApis } from "@/apis/ProblemApis";
import { AnswerApis } from "@/apis/AnswerApis";
import { Page } from "@/utils/PageUtil";

export const ProblemManipulator = {
  fetchProblem: async (problemId: number): Promise<Problem> => {
    return await ProblemApis.getProblem(problemId);
  },
  fetchAnswer: async (problemId: number): Promise<Answer> => {
    return await AnswerApis.getAnswer(problemId);
  },
  fetchProblems: async (
    answerType?: AnswerType,
    pageNumber?: number,
  ): Promise<Page<Problem>> => {
    return await ProblemApis.getProblems(answerType, pageNumber);
  },
};

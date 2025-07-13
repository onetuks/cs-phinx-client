import { Problem } from "@/types/Problem";
import { Answer } from "@/types/Answer";
import { ProblemApis } from "@/apis/ProblemApis";
import { AnswerApis } from "@/apis/AnswerApis";

export const ProblemManipulator = {
  fetchProblem: async (problemId: number): Promise<Problem> => {
    return await ProblemApis.getProblem(problemId);
  },
  fetchAnswer: async (problemId: number): Promise<Answer> => {
    return await AnswerApis.getAnswer(problemId);
  },
};

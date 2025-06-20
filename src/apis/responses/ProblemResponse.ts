import { Difficulty, Problem, Topic } from "@/types/Problem";
import { DateUtil } from "@/utils/DateUtil";

export interface ProblemResponse {
  problemId: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  topic: Topic;
  tags: string[];
  isActive: boolean;
  updatedAt: string;
}

export const ProblemResponse = {
  toProblem: (problemResponse: ProblemResponse): Problem => {
    return {
      problemId: problemResponse.problemId,
      title: problemResponse.title,
      description: problemResponse.description,
      difficulty: problemResponse.difficulty,
      topic: problemResponse.topic,
      tags: problemResponse.tags,
      isActive: problemResponse.isActive,
      updatedAt: DateUtil.toDate(problemResponse.updatedAt),
    };
  },
};

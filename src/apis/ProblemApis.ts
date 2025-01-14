import { arrayToDate, get, patch, post, remove } from "@/apis/ApiRequestUtil";
import { Difficulty, Problem, Topic } from "@/types/Problem";
import { buildPageQuery, Page } from "@/apis/PageUtil";

export interface ProblemCommand {
  title: string;
  description: string;
  difficulty: Difficulty;
  topic: Topic;
  tags: string[];
  isActive: boolean;
}

export const ProblemApis = {
  BASE_URI: "/problems",
  convertToCommand: (problem: Problem): ProblemCommand => {
    return {
      title: problem.title.trim(),
      description: problem.description.trim(),
      difficulty: problem.difficulty,
      topic: problem.topic,
      tags: problem.tags.filter((t) => t.trim().length > 0),
      isActive: problem.isActive,
    };
  },
  checkCommandValidity: (command: ProblemCommand) => {
    if (
      !command.title ||
      !command.description ||
      !command.difficulty ||
      !command.topic ||
      command.tags.length === 0 ||
      !command.isActive
    ) {
      throw new Error("ProblemCommand is invalid");
    }
  },
  postNewProblem: async (body: ProblemCommand): Promise<number> => {
    return await post(ProblemApis.BASE_URI, body);
  },
  getProblem: async (problemId: number): Promise<Problem> => {
    return await get(`${ProblemApis.BASE_URI}/${problemId}`).then(
      (res) => res as Problem
    );
  },
  getProblems: async (page: number): Promise<Page<Problem>> => {
    return await get(`${ProblemApis.BASE_URI}${buildPageQuery(page)}`).then(
      (res) => {
        const responses = res as Page<Problem>;
        responses.content.forEach(
          (problem) => (problem.updateAt = arrayToDate(problem.updateAt))
        );
        return responses;
      }
    );
  },
  patchProblem: async (problemId: number, body: ProblemCommand) => {
    await patch(`${ProblemApis.BASE_URI}/${problemId}`, body);
  },
  deleteProblem: async (problemId: number) => {
    await remove(`${ProblemApis.BASE_URI}/${problemId}`);
  },
};

import { get, patch, post, remove } from "@/apis/ApiRequestUtil";
import { Difficulty, Problem, Topic } from "@/types/Problem";

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
  postNewProblem: async (body: ProblemCommand) => {
    await post(ProblemApis.BASE_URI, body).then((res) => console.log(res));
  },
  getProblem: async (problemId: number): Promise<Problem> => {
    return await get(`${ProblemApis.BASE_URI}/${problemId}`).then(
      (res) => res as Problem
    );
  },
  patchProblem: async (problemId: number, body: ProblemCommand) => {
    await patch(`${ProblemApis.BASE_URI}/${problemId}`, body);
  },
  deleteProblem: async (problemId: number) => {
    await remove(`${ProblemApis.BASE_URI}/${problemId}`);
  },
};

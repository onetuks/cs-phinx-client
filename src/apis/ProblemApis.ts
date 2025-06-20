import { get, patch, post, remove } from "@/utils/ApiRequestUtil";
import { Problem } from "@/types/Problem";
import { Page, PageUtil } from "@/utils/PageUtil";
import { AnswerType } from "@/types/Answer";
import { ProblemCommand } from "@/apis/commands/ProblemCommand";
import { ProblemResponse } from "@/apis/responses/ProblemResponse";

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
  getProblems: async (
    page: number,
    answerType: AnswerType
  ): Promise<Page<Problem>> => {
    const queryParam =
      answerType === undefined ? "" : `?answer-type=${answerType}`;

    return await get(
      PageUtil.buildPageQuery(ProblemApis.BASE_URI + queryParam, page)
    ).then((res) => {
      const responses = res as Page<Problem>;
      responses.content.forEach(
        (problem) => (problem.updateAt = arrayToDate(problem.updateAt))
      );
      return responses;
    });
  },
  patchProblem: async (problemId: number, body: ProblemCommand) => {
    await patch(`${ProblemApis.BASE_URI}/${problemId}`, body);
  },
  deleteProblem: async (problemId: number) => {
    await remove(`${ProblemApis.BASE_URI}/${problemId}`);
  },
};

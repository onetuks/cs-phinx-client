import { get, patch, post, remove } from "@/utils/ApiRequestUtil";
import { Problem } from "@/types/Problem";
import { Page, PageUtil } from "@/utils/PageUtil";
import { AnswerType } from "@/types/Answer";
import { ProblemCommand } from "@/apis/commands/ProblemCommand";
import { ProblemResponse } from "@/apis/responses/ProblemResponse";

const BASE_URI = "/problems" as const;

export const ProblemApis = {
  postNewProblem: async (body: ProblemCommand): Promise<number> => {
    return await post(BASE_URI, body);
  },
  getProblem: async (problemId: number): Promise<Problem> => {
    return await get(`${BASE_URI}/${problemId}`).then((res) => {
      const problemResponse = res as ProblemResponse;
      return ProblemResponse.toProblem(problemResponse);
    });
  },
  getProblems: async (
    answerType?: AnswerType,
    page?: number,
    size?: number
  ): Promise<Page<Problem>> => {
    const queryParam =
      answerType === undefined ? "" : `?answer-type=${answerType}`;
    const urlQuery = PageUtil.buildPageQuery(BASE_URI + queryParam, page, size);

    return await get(urlQuery).then((res) => {
      const problemResponses = res as Page<ProblemResponse>;
      const problems = res as Page<Problem>;
      problemResponses.content.forEach(
        (problemResponse: ProblemResponse, index: number) => {
          problems.content[index] = ProblemResponse.toProblem(problemResponse);
        }
      );
      return problems;
    });
  },
  patchProblem: async (problemId: number, body: ProblemCommand) => {
    await patch(`${BASE_URI}/${problemId}`, body);
  },
  deleteProblem: async (problemId: number) => {
    await remove(`${BASE_URI}/${problemId}`);
  },
};

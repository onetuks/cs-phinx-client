import { Answer } from "@/types/Answer";
import { AnswerResponse } from "@/apis/responses/AnswerResponse";
import { get, patch, post, remove } from "@/utils/ApiRequestUtil";

const BASE_URI = "/answers" as const;

export const AnswerApis = {
  postNewAnswer: async (body: AnswerCommand) => {
    await post(BASE_URI, body);
  },
  getAnswer: async (problemId: number): Promise<Answer> => {
    return await get(`${BASE_URI}?problem-id=${problemId}`).then((res) => {
      const answerResponse = res as AnswerResponse;
      return AnswerResponse.toAnswer(answerResponse);
    });
  },
  patchAnswer: async (answerId: number, body: AnswerCommand) => {
    await patch(`${BASE_URI}/${answerId}`, body);
  },
  deleteAnswer: async (answerId: number): Promise<void> => {
    await remove(`${BASE_URI}/${answerId}`);
  },
};

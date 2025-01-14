import { Answer, AnswerType } from "@/types/Answer";
import { get, patch, post, remove } from "@/apis/ApiRequestUtil";

export interface AnswerCommand {
  problemId: number;
  answerType: AnswerType;
  answerValues: string[];
}

export const AnswerApis = {
  BASE_URI: "/answers",
  convertToCommand: (answer: Answer): AnswerCommand => {
    return {
      problemId: answer.problemId,
      answerType: answer.answerType,
      answerValues: answer.answerValues,
    };
  },
  checkCommandValidity: (command: AnswerCommand) => {
    if (
      !command.problemId ||
      command.problemId === -1 ||
      !command.answerType ||
      command.answerValues.length === 0
    ) {
      throw new Error("AnswerCommand is invalid");
    }
  },
  postNewAnswer: async (body: AnswerCommand) => {
    await post(AnswerApis.BASE_URI, body);
  },
  getAnswer: async (problemId: number): Promise<Answer> => {
    return await get(`${AnswerApis.BASE_URI}?problem-id=${problemId}`).then(
      (res) => res as Answer
    );
  },
  patchAnswer: async (answerId: number, body: AnswerCommand) => {
    await patch(`${AnswerApis.BASE_URI}/${answerId}`, body);
  },
  deleteAnswer: async (answerId: number): Promise<void> => {
    await remove(`${AnswerApis.BASE_URI}/${answerId}`);
  },
};

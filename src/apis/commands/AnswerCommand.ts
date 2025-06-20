import { Answer, AnswerType } from "@/types/Answer";
import { INVALID_ANSWER_COMMAND } from "@/utils/ToastUtil";

export interface AnswerCommand {
  problemId: number;
  answerType: AnswerType;
  answerValues: string[];
}

export const AnswerCommand = {
  fromAnswer: (answer: Answer): AnswerCommand => {
    const answerCommand: AnswerCommand = {
      problemId: answer.problemId,
      answerType: answer.answerType,
      answerValues: answer.answerValues,
    };

    checkCommandValidity(answerCommand);

    return answerCommand;
  },
};

const checkCommandValidity = (command: AnswerCommand) => {
  if (
    !command.problemId ||
    command.problemId === -1 ||
    !command.answerType ||
    command.answerValues.length === 0
  ) {
    throw new Error(INVALID_ANSWER_COMMAND);
  }
};

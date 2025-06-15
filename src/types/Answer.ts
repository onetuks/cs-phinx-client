export interface Answer {
  answerId: number;
  problemId: number;
  answerType: AnswerType;
  answerValues: string[];
}

export type AnswerType = "CHOICE" | "SHORT" | "DESCRIPTION";
export const AnswerTypes: AnswerType[] = ["CHOICE", "SHORT", "DESCRIPTION"];

export const initialAnswer = {
  answerId: -1,
  problemId: -1,
  answerType: AnswerTypes[0],
  answerValues: [],
};

export const AnswerTypeUtil = {
  toAnswerType: (answerTypeString: string): AnswerType => {
    return AnswerTypes.filter((answerType) =>
      answerTypeString.toUpperCase().includes(answerType)
    )[0];
  },
};

export interface Answer {
  answerId: number;
  problemId: number;
  answerType: AnswerType;
  answerValues: string[];
  updatedAt: Date;
}

export type AnswerType = "CHOICE" | "SHORT" | "DESCRIPTION";
export const AnswerTypes: AnswerType[] = ["CHOICE", "SHORT", "DESCRIPTION"];

export const initialAnswer = {
  answerId: -1,
  problemId: -1,
  answerType: AnswerTypes[0],
  answerValues: [],
  updatedAt: new Date(),
};

export const AnswerTypeUtil = {
  toAnswerType: (answerTypeString: string): AnswerType => {
    return AnswerTypes.filter((answerType) =>
      answerTypeString.toUpperCase().includes(answerType)
    )[0];
  },
};

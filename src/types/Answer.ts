export interface Answer {
  answerId: number;
  problemId: number;
  answerType: AnswerType;
  answerValues: string[];
  updatedAt: Date;
}

export type AnswerType = "CHOICE" | "SHORT" | "DESCRIPTION";

export const initialAnswer = {
  answerId: -1,
  problemId: -1,
  answerType: "CHOICE",
  answerValues: [],
  updatedAt: new Date(),
};

export const AnswerType = {
  nameOf: (answerTypeString: string): AnswerType => {
    return AnswerType.values().filter((answerType) =>
      answerTypeString.toUpperCase().includes(answerType),
    )[0];
  },
  valueOf: (answerType: AnswerType): string => {
    switch (answerType) {
      case "CHOICE":
        return "객관식";
      case "SHORT":
        return "단답형";
      case "DESCRIPTION":
        return "서술형";
    }
  },
  values: (): AnswerType[] => {
    return ["CHOICE", "SHORT", "DESCRIPTION"];
  },
};

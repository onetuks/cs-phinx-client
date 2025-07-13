export interface Problem {
  problemId: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  topic: Topic;
  tags: string[];
  isActive: boolean;
  updatedAt: Date;
}

export const initialProblem: Problem = {
  problemId: -1,
  title: "",
  description: "",
  difficulty: "EASY",
  topic: "COMPUTER_ARCHITECTURE",
  tags: [],
  isActive: true,
  updatedAt: new Date(),
};

export const Difficulty = {
  values: (): Difficulty[] => ["EASY", "MEDIUM", "HARD"],
};

export const Topic = {
  values: (): Topic[] => [
    "PROGRAMMING_LANGUAGE",
    "DATA_STRUCTURES",
    "ALGORITHMS",
    "DATABASES",
    "OPERATING_SYSTEMS",
    "NETWORKING",
    "SOFTWARE_ENGINEERING",
    "COMPUTER_ARCHITECTURE",
    "SOFTWARE_TOOLS",
    "WEB_DEVELOPMENT",
  ],
  valueOf: (topic: Topic): string => {
    switch (topic) {
      case "PROGRAMMING_LANGUAGE":
        return "프로그래밍 언어";
      case "DATA_STRUCTURES":
        return "데이터구조";
      case "ALGORITHMS":
        return "알고리즘";
      case "DATABASES":
        return "데이터베이스";
      case "OPERATING_SYSTEMS":
        return "운영체제";
      case "NETWORKING":
        return "네트워크";
      case "SOFTWARE_ENGINEERING":
        return "소프트웨어 공학";
      case "COMPUTER_ARCHITECTURE":
        return "컴퓨터구조";
      case "SOFTWARE_TOOLS":
        return "소프트웨어 도구";
      case "WEB_DEVELOPMENT":
        return "웹개발";
    }
  },
};

export type Difficulty = "EASY" | "MEDIUM" | "HARD";
export type Topic =
  | "PROGRAMMING_LANGUAGE"
  | "DATA_STRUCTURES"
  | "ALGORITHMS"
  | "DATABASES"
  | "OPERATING_SYSTEMS"
  | "NETWORKING"
  | "SOFTWARE_ENGINEERING"
  | "COMPUTER_ARCHITECTURE"
  | "SOFTWARE_TOOLS"
  | "WEB_DEVELOPMENT";

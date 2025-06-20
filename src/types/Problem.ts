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

export const Difficulties: Difficulty[] = ["EASY", "MEDIUM", "HARD"];
export const Topics: Topic[] = [
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
];

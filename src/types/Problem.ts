export interface Problem {
  problemId: string;
  title: string;
  description: string;
  workBookId: string;
  isActive: boolean;
}

export const initialProblem: Problem = {
  problemId: "",
  title: "",
  description: "",
  workBookId: "",
  isActive: true,
};

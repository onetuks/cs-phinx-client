import { defineStore } from "pinia";
import { Problem } from "@/types/Problem";

export const useProblemsStore = defineStore("problems", {
  state: () => ({
    problems: [] as Problem[],
  }),
  getters: {
    getNextProblemId: (state) => (currentProblem: Problem) => {
      const nextProblemIdx = state.problems.indexOf(currentProblem) + 1;
      return state.problems[nextProblemIdx].problemId;
    },
  },
  actions: {
    setProblems(list: Problem[]) {
      this.problems = list;
    },
    clearProblems() {
      this.problems = [];
    },
  },
});

import { Difficulty, Problem, Topic } from "@/types/Problem";
import { INVALID_PROBLEM_COMMAND, toaster } from "@/utils/ToastUtil";

export interface ProblemCommand {
  title: string;
  description: string;
  difficulty: Difficulty;
  topic: Topic;
  tags: string[];
  isActive: boolean;
}

export const ProblemCommand = {
  fromProblem: (problem: Problem): ProblemCommand => {
    const problemCommand: ProblemCommand = {
      title: problem.title.trim(),
      description: problem.description.trim(),
      difficulty: problem.difficulty,
      topic: problem.topic,
      tags: problem.tags.filter((t) => t.trim().length > 0),
      isActive: problem.isActive,
    };

    checkCommandValidity(problemCommand);

    return problemCommand;
  },
};

const checkCommandValidity = (command: ProblemCommand) => {
  if (
    !command.title ||
    !command.description ||
    !command.difficulty ||
    !command.topic ||
    command.tags.length === 0 ||
    !command.isActive
  ) {
    toaster.error(INVALID_PROBLEM_COMMAND);
  }
};

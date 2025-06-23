import { ProblemApis } from "@/apis/ProblemApis";
import { Problem } from "@/types/Problem";
import { AnswerApis } from "@/apis/AnswerApis";
import { Answer } from "@/types/Answer";
import { ProblemCommand } from "@/apis/commands/ProblemCommand";
import {
  ANSWER_EDIT_SUCCESS,
  ANSWER_REGISTER_SUCCESS,
  ANSWER_REMOVE_SUCCESS,
  PROBLEM_EDIT_SUCCESS,
  PROBLEM_REGISTER_SUCCESS,
  PROBLEM_REMOVE_SUCCESS,
  toaster,
} from "@/utils/ToastUtil";
import { AnswerCommand } from "@/apis/commands/AnswerCommand";
import { RouteUtil } from "@/utils/RouteUtil";

export const ProblemManipulator = {
  fetchProblem: async (problemId: number, problem: Problem) => {
    await ProblemApis.getProblem(problemId).then((res: Problem) => {
      problem.value = res;
    });
  },
  fetchAnswer: async (problemId: number, answer: Answer) => {
    await AnswerApis.getAnswer(problemId).then((res: Answer) => {
      answer.value = res;
    });
  },
  registerProblem: async (problem: Problem, answer: Answer) => {
    await ProblemApis.postNewProblem(ProblemCommand.fromProblem(problem)).then(
      async (problemId) => {
        problem.problemId = problemId;
        answer.problemId = problemId;
        await AnswerApis.postNewAnswer(AnswerCommand.fromAnswer(answer)).then(
          () => {
            toaster.success(PROBLEM_REGISTER_SUCCESS);
            toaster.success(ANSWER_REGISTER_SUCCESS);
            RouteUtil.moveToProblemEditPage(problemId);
          }
        );
      }
    );
  },
  editProblem: async (problem: Problem, answer: Answer) => {
    await ProblemApis.patchProblem(
      problem.problemId,
      ProblemCommand.fromProblem(problem)
    ).then(async () => {
      console.log("answer", answer);
      await AnswerApis.patchAnswer(
        answer.answerId,
        AnswerCommand.fromAnswer(answer)
      ).then(() => {
        toaster.success(PROBLEM_EDIT_SUCCESS);
        toaster.success(ANSWER_EDIT_SUCCESS);
      });
    });
  },
  removeProblem: async (problemId: number, answerId: number) => {
    await AnswerApis.deleteAnswer(answerId).then(async () => {
      await ProblemApis.deleteProblem(problemId).then(() => {
        AnswerApis.deleteAnswer(problemId).then(async () => {
          toaster.success(PROBLEM_REMOVE_SUCCESS);
          toaster.success(ANSWER_REMOVE_SUCCESS);
          RouteUtil.moveToProblemManagerPage();
        });
      });
    });
  },
};

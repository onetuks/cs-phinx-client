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
  registerProblem: async (problem: Problem) => {
    await ProblemApis.postNewProblem(ProblemCommand.fromProblem(problem)).then(
      (problemId) => {
        problem.problemId = problemId;
        toaster.success(PROBLEM_REGISTER_SUCCESS);
        ManagerRouterUtil.moveToProblemEditPage(problemId);
      }
    );
  },
  editProblem: async (problem: Problem) => {
    await ProblemApis.patchProblem(
      problem.problemId,
      ProblemCommand.fromProblem(problem)
    ).then(() => {
      toaster.success(PROBLEM_EDIT_SUCCESS);
    });
  },
  removeProblem: async (problemId: number) => {
    await ProblemApis.deleteProblem(problemId).then(() => {
      AnswerApis.deleteAnswer(problemId).then(() => {
        toaster.success(PROBLEM_REMOVE_SUCCESS);
        ManagerRouterUtil.moveToProblemManagerPage();
      });
    });
  },
  fetchAnswer: async (problemId: number, answer: Answer) => {
    await AnswerApis.getAnswer(problemId).then((res: Answer) => {
      answer.value = res;
    });
  },
  registerAnswer: async (answer: Answer) => {
    await AnswerApis.postNewAnswer(AnswerCommand.fromAnswer(answer)).then(
      () => {
        toaster.success(ANSWER_REGISTER_SUCCESS);
      }
    );
  },
  editAnswer: async (answer: Answer) => {
    await AnswerApis.patchAnswer(
      answer.answerId,
      AnswerCommand.fromAnswer(answer)
    ).then(() => {
      toaster.success(ANSWER_EDIT_SUCCESS);
    });
  },
  removeAnswer: async (answerId: number) => {
    await AnswerApis.deleteAnswer(answerId).then(() => {
      toaster.success(ANSWER_REMOVE_SUCCESS);
    });
  },
};

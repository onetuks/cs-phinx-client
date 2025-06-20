import { Workbook } from "@/types/Workbook";
import { Problem } from "@/types/Problem";
import { INVALID_WORKBOOK_COMMAND } from "@/utils/ToastUtil";

export interface WorkbookCommand {
  title: string;
  description: string;
  collectionType: CollectionType;
  includedProblemIds: number[];
  isActive: boolean;
}

export const WorkbookCommand = {
  fromWorkbook: (workbook: Workbook): WorkbookCommand => {
    const workbookCommand: WorkbookCommand = {
      title: workbook.title.trim(),
      description: workbook.description.trim(),
      collectionType: workbook.collectionType,
      includedProblemIds: workbook.includedProblems.map(
        (p: Problem) => p.problemId
      ),
      isActive: workbook.isActive,
    };

    checkCommandValidity(workbookCommand);

    return workbookCommand;
  },
};

const checkCommandValidity = (command: WorkbookCommand) => {
  if (
    !command.title ||
    !command.description ||
    !command.collectionType ||
    !command.includedProblemIds
  ) {
    throw new Error(INVALID_WORKBOOK_COMMAND);
  }
};

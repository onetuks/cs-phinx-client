import { arrayToDate, get, patch, post, remove } from "@/utils/ApiRequestUtil";
import { CollectionType, Workbook } from "@/types/Workbook";
import { Problem } from "@/types/Problem";
import { Page, PageUtil } from "@/utils/PageUtil";
import { INVALID_WORKBOOK_COMMAND } from "@/utils/ToastUtil";

export interface WorkbookCommand {
  title: string;
  description: string;
  collectionType: CollectionType;
  includedProblemIds: number[];
  isActive: boolean;
}

export const WorkbookApis = {
  BASE_URI: "/workbooks",
  convertToCommand: (workbook: Workbook): WorkbookCommand => {
    return {
      title: workbook.title.trim(),
      description: workbook.description.trim(),
      collectionType: workbook.collectionType,
      includedProblemIds: workbook.includedProblems.map(
        (p: Problem) => p.problemId
      ),
      isActive: workbook.isActive,
    };
  },
  checkCommandValidity: (command: WorkbookCommand) => {
    if (
      !command.title ||
      !command.description ||
      !command.collectionType ||
      !command.includedProblemIds
    ) {
      throw new Error(INVALID_WORKBOOK_COMMAND);
    }
  },
  postNewWorkbook: async (body: WorkbookCommand): Promise<number> => {
    return await post(WorkbookApis.BASE_URI, body);
  },
  getWorkbook: async (workbookId: number): Promise<Workbook> => {
    return await get(`${WorkbookApis.BASE_URI}/${workbookId}`).then(
      (res) => res as Workbook
    );
  },
  getWorkbooks: async (
    page?: number,
    size?: number
  ): Promise<Page<Workbook>> => {
    return await get(
      PageUtil.buildPageQuery(WorkbookApis.BASE_URI, page, size)
    ).then((res) => {
      const responses = res as Page<Workbook>;
      responses.content.forEach((workbook: Workbook) => {
        workbook.updatedAt = arrayToDate(workbook.updatedAt);
      });
      return responses;
    });
  },
  patchWorkbook: async (
    workbookId: number,
    body: WorkbookCommand
  ): Promise<void> => {
    await patch(`${WorkbookApis.BASE_URI}/${workbookId}`, body);
  },
  deleteWorkbook: async (workbookId: number): Promise<void> => {
    await remove(`${WorkbookApis.BASE_URI}/${workbookId}`);
  },
};

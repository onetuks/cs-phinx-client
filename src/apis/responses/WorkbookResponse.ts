import { Problem } from "@/types/Problem";
import { CollectionType, Workbook } from "@/types/Workbook";
import { DateUtil } from "@/utils/DateUtil";

export interface WorkbookResponse {
  workbookId: number;
  title: string;
  description: string;
  collectionType: CollectionType;
  includedProblems: Problem[];
  isActive: boolean;
  updatedAt: string;
}

export const WorkbookResponse = {
  toWorkbook: (workbookResponse: WorkbookResponse): Workbook => {
    return {
      workbookId: workbookResponse.workbookId,
      title: workbookResponse.title,
      description: workbookResponse.description,
      collectionType: workbookResponse.collectionType,
      includedProblems: workbookResponse.includedProblems,
      isActive: workbookResponse.isActive,
      updatedAt: DateUtil.toDate(workbookResponse.updatedAt),
    };
  },
};

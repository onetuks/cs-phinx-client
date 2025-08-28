import { WorkbookApis } from "@/apis/WorkbookApis";
import { CollectionType, Workbook } from "@/types/Workbook";
import { Page } from "@/utils/PageUtil";

export const WorkbookManipulator = {
  fetchWorkbook: async (workbookId: number): Promise<Workbook> => {
    return await WorkbookApis.getWorkbook(workbookId);
  },
  fetchWorkbooks: async (
    collectionType?: CollectionType,
    pageNumber?: number,
    pageSize?: number,
  ): Promise<Page<Workbook>> => {
    return await WorkbookApis.getWorkbooks(
      collectionType,
      pageNumber,
      pageSize,
    );
  },
  fetchWorkbooksWithKeyword: async (
    keyword?: string,
    collectionType?: CollectionType,
    pageNumber?: number,
    pageSize?: number,
  ): Promise<Page<Workbook>> => {
    return await WorkbookApis.getWorkbooksWithKeyword(
      keyword,
      collectionType,
      pageNumber,
      pageSize,
    );
  },
};

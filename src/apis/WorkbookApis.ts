import { arrayToDate, get, patch, post, remove } from "@/utils/ApiRequestUtil";
import { Workbook } from "@/types/Workbook";
import { Page, PageUtil } from "@/utils/PageUtil";

const BASE_URI = "/workbooks" as const;

export const WorkbookApis = {
  postNewWorkbook: async (body: WorkbookCommand): Promise<number> => {
    return await post(BASE_URI, body);
  },
  getWorkbook: async (workbookId: number): Promise<Workbook> => {
    return await get(`${BASE_URI}/${workbookId}`).then((res) => {
      return res as Workbook;
    });
  },
  getWorkbooks: async (
    page?: number,
    size?: number
  ): Promise<Page<Workbook>> => {
    return await get(PageUtil.buildPageQuery(BASE_URI, page, size)).then(
      (res) => {
        const responses = res as Page<Workbook>;
        responses.content.forEach((workbook: Workbook) => {
          workbook.updatedAt = arrayToDate(workbook.updatedAt);
        });
        return responses;
      }
    );
  },
  patchWorkbook: async (
    workbookId: number,
    body: WorkbookCommand
  ): Promise<void> => {
    await patch(`${BASE_URI}/${workbookId}`, body);
  },
  deleteWorkbook: async (workbookId: number): Promise<void> => {
    await remove(`${BASE_URI}/${workbookId}`);
  },
};

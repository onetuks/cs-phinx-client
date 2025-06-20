import { get, patch, post, remove } from "@/utils/ApiRequestUtil";
import { Workbook } from "@/types/Workbook";
import { Page, PageUtil } from "@/utils/PageUtil";
import { WorkbookResponse } from "@/apis/responses/WorkbookResponse";

const BASE_URI = "/workbooks" as const;

export const WorkbookApis = {
  postNewWorkbook: async (body: WorkbookCommand): Promise<number> => {
    return await post(BASE_URI, body);
  },
  getWorkbook: async (workbookId: number): Promise<Workbook> => {
    return await get(`${BASE_URI}/${workbookId}`).then((res) => {
      const workbookResponse = res as WorkbookResponse;
      return WorkbookResponse.toWorkbook(workbookResponse);
    });
  },
  getWorkbooks: async (
    page?: number,
    size?: number
  ): Promise<Page<Workbook>> => {
    return await get(PageUtil.buildPageQuery(BASE_URI, page, size)).then(
      (res) => {
        const workbookResponses = res as Page<WorkbookResponse>;
        const workbooks = res as Page<Workbook>;
        workbookResponses.content.forEach(
          (workbookResponse: WorkbookResponse, index: number) => {
            workbooks.content[index] =
              WorkbookResponse.toWorkbook(workbookResponse);
          }
        );
        return workbooks;
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

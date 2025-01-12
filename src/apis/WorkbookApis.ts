import { get, patch, post, remove } from "@/apis/ApiRequestUtil";
import { WorkBook } from "@/types/WorkBook";

export interface WorkbookCommand {
  title: string;
  description: string;
  collectionType: CollectionType;
  includedProblemIds: number[];
  isActive: boolean;
}

type CollectionType =
  | "TOPIC_POINT"
  | "QUICK_POINT"
  | "KEY_POINT"
  | "TRAP_POINT"
  | "DAILY_POINT";

export const WorkbookApis = {
  BASE_URI: "/workbooks",
  postNewWorkbook: async (body: WorkbookCommand): Promise<void> => {
    await post(WorkbookApis.BASE_URI, body).then((res) => console.log(res));
  },
  getWorkbook: async (workbookId: number): Promise<WorkBook> => {
    return await get(`${WorkbookApis.BASE_URI}/${workbookId}`).then(
      (res) => res as WorkBook
    );
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

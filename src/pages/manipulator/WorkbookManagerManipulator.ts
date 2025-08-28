import { Workbook } from "@/types/Workbook";
import { WorkbookApis } from "@/apis/WorkbookApis";
import { WorkbookCommand } from "@/apis/commands/WorkbookCommand";
import {
  toaster,
  WORKBOOK_EDIT_SUCCESS,
  WORKBOOK_REGISTER_SUCCESS,
  WORKBOOK_REMOVE_SUCCESS,
} from "@/utils/ToastUtil";
import { RouteUtil } from "@/utils/RouteUtil";

export const WorkbookManagerManipulator = {
  registerWorkbook: async (workbook: Workbook) => {
    await WorkbookApis.postNewWorkbook(
      WorkbookCommand.fromWorkbook(workbook),
    ).then((workbookId) => {
      workbook.workbookId = workbookId;
      toaster.success(WORKBOOK_REGISTER_SUCCESS);
      RouteUtil.moveToWorkbookEditPage(workbookId);
    });
  },
  editWorkbook: async (workbook: Workbook) => {
    await WorkbookApis.patchWorkbook(
      workbook.workbookId,
      WorkbookCommand.fromWorkbook(workbook),
    ).then(() => {
      toaster.success(WORKBOOK_EDIT_SUCCESS);
    });
  },
  removeWorkbook: async (workbookId: number) => {
    await WorkbookApis.deleteWorkbook(workbookId).then(() => {
      toaster.success(WORKBOOK_REMOVE_SUCCESS);
      RouteUtil.moveToWorkbookManagerPage();
    });
  },
};

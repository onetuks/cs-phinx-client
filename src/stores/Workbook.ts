import { defineStore } from "pinia";

export const useWorkbookStore = defineStore("workbookId", {
  state: () => ({
    workbookId: -1 as number,
  }),
  getters: {
    getWorkbookId: (state) => () => state.workbookId,
  },
  actions: {
    setWorkbookId(workbookId: number) {
      this.workbookId = workbookId;
    },
  },
});

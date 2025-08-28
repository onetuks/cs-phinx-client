<script lang="ts" setup>
import WorkbookCardView from "@/pages/challenger/workbooks/components/WorkbookCardView.vue";
import { onMounted, ref } from "vue";
import { CollectionType, Workbook } from "@/types/Workbook";
import { Page, PageUtil } from "@/utils/PageUtil";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { toaster } from "@/utils/ToastUtil";
import { WorkbookManipulator } from "@/pages/manipulator/WorkbookManipulator";

async function searchWithKeyword(): Promise<void> {
  searchKeyword.value = searchKeyword.value.trim();

  if (searchKeyword.value.length <= 1) {
    toaster.warning("두 글자 이상으로 검색해주세요");

    if (searchKeyword.value.length <= 0) {
      workbooks.value = await WorkbookManipulator.fetchWorkbooks(
        selectedCollectionTypes.value,
        workbooks.value.number,
      );
    }
    return;
  }

  workbooks.value = await WorkbookManipulator.fetchWorkbooksWithKeyword(
    searchKeyword.value,
    selectedCollectionTypes.value,
    workbooks.value.number,
  );
}

onMounted(async () => {
  workbooks.value = await WorkbookManipulator.fetchWorkbooks(
    selectedCollectionTypes.value,
    workbooks.value.number,
  );
});

type OrderType = "최신순" | "가나다";
const orderTypes = ["최신순", "가나다"];

const selectedOrderType = ref<OrderType>("최신순");
const selectedCollectionTypes = ref<CollectionType | undefined>(undefined);
const searchKeyword = ref<string>("");
const workbooks = ref<Page<Workbook>>(PageUtil.emptyPage());

function onOrderTypeChange() {
  switch (selectedOrderType.value) {
    case "최신순":
      workbooks.value.content.sort(
        (a: Workbook, b: Workbook) =>
          a.updatedAt.getTime() - b.updatedAt.getTime(),
      );
      break;
    case "가나다":
      workbooks.value.content.sort((a: Workbook, b: Workbook) =>
        a.title.localeCompare(b.title),
      );
      break;
  }
}
</script>

<template>
  <div class="my-8">
    <!-- 검색창 -->
    <div class="relative">
      <input
        v-model="searchKeyword"
        class="border border-gray-200 p-3 w-full rounded-md bg-white"
        placeholder="풀고 싶은 문제집 제목 검색"
        type="text"
      />
      <button class="icon" @click="searchWithKeyword">
        <font-awesome-icon
          class="text-gray-200 text-lg"
          icon="fa-solid fa-search"
        />
      </button>
    </div>

    <!-- 정렬조건 -->
    <div class="flex justify-end p-3 gap-5">
      <!--  문제집 종류 선택   -->
      <select v-model="selectedCollectionTypes">
        <option
          v-for="collectionType in [...CollectionType.values(), undefined]"
          :key="collectionType"
          :value="collectionType"
          v-text="
            collectionType === undefined
              ? '전체'
              : CollectionType.valueOf(collectionType)
          "
        />
      </select>

      <!--   정렬조건   -->
      <select v-model="selectedOrderType" @change="onOrderTypeChange">
        <option
          v-for="orderType in orderTypes"
          :key="orderType"
          :value="orderType"
          v-text="orderType"
        />
      </select>
    </div>

    <!--  문제집 목록  -->
    <div
      class="grid grid-cols-3 @max-sm:grid-cols-1 @min-xl:grid-cols-5 gap-8 py-10"
    >
      <WorkbookCardView
        v-for="workbook in workbooks.content"
        :workbook="workbook"
      />
    </div>
  </div>
</template>

<style scoped></style>

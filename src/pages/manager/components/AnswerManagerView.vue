<script setup lang="ts">
import AnswerInfoView from "@/pages/manager/components/AnswerInfoView.vue";
import ManagerButton from "@/components/widgets/ManagerButton.vue";
import { watch } from "vue";
import { useRoute } from "vue-router";
import { Answer } from "@/types/Answer";
import { Problem } from "@/types/Problem";
import { AnswerApis } from "@/apis/AnswerApis";
import { AnswerCommand } from "@/apis/commands/AnswerCommand";
import {
  ANSWER_EDIT_SUCCESS,
  ANSWER_REGISTER_SUCCESS,
  ANSWER_REMOVE_SUCCESS,
  toaster,
} from "@/utils/ToastUtil";
import { RouteUtil } from "@/utils/RouteUtil";

const answer = defineModel("answer", {
  required: true,
  type: Object as () => Answer,
});
const props = defineProps<{
  problem: Problem;
}>();

const route = useRoute();

const registerAnswer = async () => {
  await AnswerApis.postNewAnswer(AnswerCommand.fromAnswer(answer.value)).then(
    () => {
      toaster.success(ANSWER_REGISTER_SUCCESS);
    }
  );
};
const editAnswer = async () => {
  await AnswerApis.patchAnswer(
    answer.value.answerId,
    AnswerCommand.fromAnswer(answer.value)
  ).then(() => {
    toaster.success(ANSWER_EDIT_SUCCESS);
  });
};
const removeAnswer = async () => {
  await AnswerApis.deleteAnswer(answer.value.answerId).then(() => {
    toast.success(ANSWER_REMOVE_SUCCESS);
  });
};

watch(props.problem, (newVal) => {
  answer.value.problemId = newVal.problemId;
});
</script>

<template>
  <div class="w-full h-fit border border-primary rounded-md py-5">
    <answer-info-view v-model:answer="answer" />
    <div class="px-5">
      <div
        class="flex flex-row justify-end space-x-4"
        v-if="RouteUtil.isForRegistration(route)"
      >
        <manager-button
          :click-button-type="'등록하기'"
          @click-button="registerAnswer"
        />
      </div>
      <div class="flex flex-row justify-end space-x-4" v-else>
        <manager-button
          :click-button-type="'수정하기'"
          @click-button="editAnswer"
        />
        <manager-button
          :click-button-type="'삭제하기'"
          @click-button="removeAnswer"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

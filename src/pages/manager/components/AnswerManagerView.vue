<script setup lang="ts">
import AnswerInfoView from "@/pages/manager/components/AnswerInfoView.vue";
import ManagerButton from "@/components/widgets/ManagerButton.vue";
import { Answer } from "@/types/Answer";
import { AnswerApis } from "@/apis/AnswerApis";
import { Problem } from "@/types/Problem";
import { useToast } from "vue-toastification";
import { useRoute } from "vue-router";
import { watch } from "vue";

const INVALID_ANSWER_COMMAND =
  "답안 정보가 충분히 기입되지 않았습니다" as const;
const ANSWER_REGISTER_SUCCESS = "답안이 성공적으로 등록되었습니다" as const;
const ANSWER_EDIT_SUCCESS = "답안이 성공적으로 수정되었습니다" as const;
const ANSWER_REMOVE_SUCCESS = "답안이 성공적으로 삭제되었습니다" as const;

const answer = defineModel("answer", {
  required: true,
  type: Object as () => Answer,
});
const props = defineProps<{
  problem: Problem;
}>();

const route = useRoute();
const toast = useToast();

const isForRegistration: boolean = route.path.includes("/registration");

const registerAnswer = async () => {
  try {
    answer.value.problemId = props.problem.problemId;
    const answerCommand = AnswerApis.convertToCommand(answer.value);
    AnswerApis.checkCommandValidity(answerCommand);
    await AnswerApis.postNewAnswer(answerCommand).then(() => {
      toast.success(ANSWER_REGISTER_SUCCESS);
    });
  } catch (err) {
    toast.error(INVALID_ANSWER_COMMAND);
  }
};
const editAnswer = async () => {
  try {
    const answerCommand = AnswerApis.convertToCommand(answer.value);
    AnswerApis.checkCommandValidity(answerCommand);
    await AnswerApis.patchAnswer(answer.value.answerId, answerCommand).then(
      () => toast.success(ANSWER_EDIT_SUCCESS)
    );
  } catch (error) {
    toast.error(INVALID_ANSWER_COMMAND);
  }
};
const removeAnswer = async () => {
  await AnswerApis.deleteAnswer(answer.value.answerId).then(() =>
    toast.success(ANSWER_REMOVE_SUCCESS)
  );
};

watch(props.problem, (newVal) => (answer.value.problemId = newVal.problemId));
</script>

<template>
  <div class="w-full h-fit border border-primary rounded-md py-5">
    <answer-info-view v-model:answer="answer" />
    <div class="px-5">
      <div class="flex flex-row justify-end space-x-4" v-if="isForRegistration">
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

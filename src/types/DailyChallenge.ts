/**
 * 1. 하루 한 문제 풀이
 * 2. 하루 한 문제집 풀이
 * 3. 하루 풀이 점검하기
 * 4. 질문 답변 달기
 * 5. 목표 노력 점수 달성
 */
export interface DailyChallenge {
  problemChallengeCompletion: boolean;
  workbookChallengeCompletion: boolean;
  checkReportChallengeCompletion: boolean;
}

export const DailyChallenge = {
  initialDailyChallenge: {
    problemChallengeCompletion: false,
    workbookChallengeCompletion: false,
    checkReportChallengeCompletion: false,
  },
};

import { paths } from '@lib/api/api';

// API response
export type QuestionListDataType =
    paths['/questions/answers']['get']['responses']['200']['content']['application/json'];

export type QuestionType =
    paths['/questions/today']['get']['responses']['200']['content']['application/json'];

export type QuestionAnswerType =
    paths['/questions/{id}/answers']['get']['responses']['200']['content']['application/json'];

// 필터 팝업
export type filterDateKeyType = 'year' | 'month';
export type filterDateType = Record<filterDateKeyType, string>;
export type onSetQuestionListDataProp = {
    year: string;
    month: string;
};

// 질문 리스트
export type filterActiveType = {
    active: boolean;
};

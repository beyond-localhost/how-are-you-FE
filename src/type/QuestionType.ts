import { paths } from '@lib/api/api';

export type QuestionListType =
    paths['/questions/answers']['get']['responses']['200']['content']['application/json'];

export type QuestionType =
    paths['/questions/today']['get']['responses']['200']['content']['application/json'];

export type QuestionAnswerType =
    paths['/questions/{id}/answers']['get']['responses']['200']['content']['application/json'];

export type QuestionDataType = {
    questionId: number;
    questionTitle: string;
    questionContent: string;
};

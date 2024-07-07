import { api } from '@lib/api/client.ts';
import { onSetQuestionListDataProp } from '@type/QuestionType.ts';

export const getQuestionList = async (param: onSetQuestionListDataProp) => {
    const { year, month } = param;
    const curDate = new Date();

    const response = await api.GET('/questions/answers', {
        params: {
            query: {
                startYear: year ? year.toString() : '2024',
                startMonth: month ? month.toString() : '3',
                endYear: curDate.getFullYear().toString(),
                endMonth: (curDate.getMonth() + 1).toString()
            }
        }
    });

    const { error, data } = response;

    if (error) {
        throw error;
    }

    return data;
};

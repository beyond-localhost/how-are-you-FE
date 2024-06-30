import { ActionFunctionArgs, Form } from 'react-router-dom';
import React, { useState } from 'react';
import { ModeType, QuestionDataType } from '@type/QuestionType.ts';
import { MODE } from '@/constants/question.ts';

type QuestionInputProp = {
    mode: ModeType;
    questionData: QuestionDataType;
};

export async function action({ request, params }: ActionFunctionArgs) {
    const url = new URL(request.url);
    const formData = await request.formData();
    const content = formData.get('question');
    const questionId = params.questionId;
    console.log(content, questionId);

    const typeParam = url.searchParams.get('type');

    if (typeParam === MODE.WRITE) {
        /// todo: 작성 api
        // const response = await api.get('')
    } else if (typeParam === MODE.EDIT) {
        // 수정 api
    }

    return null;
}

function QuestionInput({ mode, questionData }: QuestionInputProp) {
    const [inputValue, setInputValue] = useState(
        mode === MODE.EDIT && questionData.questionContent ? questionData.questionContent : ''
    );
    const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <Form method="post" action="/question-list">
            <textarea
                name="question"
                placeholder="나에 대해 알아가는 시간을 가져보세요"
                style={{ resize: 'none' }}
                maxLength={200}
                value={inputValue}
                onChange={handleValueChange}
            />

            <p>{inputValue.length}/200</p>

            <button type="submit" disabled={inputValue.length === 0}>
                {mode === MODE.WRITE ? '작성 완료' : '수정 완료'}
            </button>
        </Form>
    );
}

export default QuestionInput;

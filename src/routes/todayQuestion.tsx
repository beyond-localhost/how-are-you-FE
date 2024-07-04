import { mauve } from '@/tokens/color.ts';
import NoteIcon from '@components/icons/NoteIcon.tsx';
import PencilIcon from '@components/icons/PencilIcon.tsx';
import { Text } from '@components/text/Text.tsx';
import {
    TodayQuestionButton,
    TodayQuestionLayout,
    TodayQuestionWrapper
} from '@feature/question/styles/TodayQuestion.style.tsx';
import { api } from '@lib/api/client';

import { QuestionType } from '@type/QuestionType.ts';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { HeaderContext } from './HeaderLayout';

export async function loader() {
    const response = await api.GET('/questions/today');
    //
    if (response.error) {
        throw response.error;
    }
    return response.data;
}

const datetimeFormatter = Intl.DateTimeFormat('ko', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
});

function TodayQuestion() {
    const headerDeps = useContext(HeaderContext);
    console.log(headerDeps);
    const data = useLoaderData() as QuestionType;
    const navigate = useNavigate();

    const handleButtonClick = () => {
        const url = `/question/${data.questionId}`;
        navigate(url);
    };

    /**
     * 오늘 날짜
     * 오늘 질문
     * 버튼 (작성 / 수정) => 작성 여부에 따라
     * */
    return (
        <TodayQuestionLayout deductedHeight={headerDeps.height}>
            <Text size={5} weight={'medium'} color={mauve['11']}>
                {datetimeFormatter.format(new Date())}
            </Text>
            <TodayQuestionWrapper>
                <Text size={5} weight={'bold'} color={mauve['12']}>
                    {data.question}
                </Text>

                {data.answer && (
                    <Text size={4} weight={'regular'} color={mauve['11']}>
                        {data.answer}
                    </Text>
                )}
            </TodayQuestionWrapper>

            <TodayQuestionButton onClick={handleButtonClick}>
                {data.userAnswered ? '확인하러 가기' : '작성하러 가기'}
                {data.userAnswered ? <NoteIcon /> : <PencilIcon />}
            </TodayQuestionButton>
        </TodayQuestionLayout>
    );
}

export default TodayQuestion;

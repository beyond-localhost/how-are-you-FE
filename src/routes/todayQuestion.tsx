import { useLoaderData, useNavigate } from 'react-router-dom';
import { QuestionType } from '@type/QuestionType.ts';
import { TEMP_CONTENT, TEMP_TITLE } from '@/constants/temp.ts';
import { Layout } from '@styles/Common.style.tsx';
import { Text } from '@components/text/Text.tsx';
import { mauve } from '@/tokens/color.ts';
import {
    TodayQuestionButton,
    TodayQuestionWrapper
} from '@feature/question/styles/TodayQuestion.style.tsx';
import NoteIcon from '@components/icons/NoteIcon.tsx';
import PencilIcon from '@components/icons/PencilIcon.tsx';
import { MODE } from '@/constants/question.ts';

export async function loader() {
    // const response = await api.GET('/questions/today');
    //
    // if (response.error) {
    //     alert('문제가 발생했습니다. 다시 시도해주세요.');
    //     redirect('/');
    // }

    // todo: 답변 (여부)
    // return response.data;
    return {
        question: TEMP_TITLE,
        answer: TEMP_CONTENT, // todo
        userAnswered: true,
        // answer: '',
        // userAnswered: false
        questionId: 1
    };
}

function TodayQuestion() {
    const data = useLoaderData() as QuestionType;
    const navigate = useNavigate();

    const todayDate = new Date();

    const formatDate = (date: number) => {
        if (date.toString().length === 1) {
            return '0' + date;
        }
        return date;
    };

    const handleButtonClick = () => {
        const url = `/question/${data.questionId}`;
        const type = data.userAnswered ? MODE.EDIT : MODE.WRITE;

        navigate(url + '?type=' + type);
    };

    /**
     * 오늘 날짜
     * 오늘 질문
     * 버튼 (작성 / 수정) => 작성 여부에 따라
     * */
    return (
        <Layout style={{ border: '2px solid pink' }}>
            <Text
                size={5}
                weight={'medium'}
                color={mauve['11']}
                style={{ paddingTop: '30%' }}
            >{`${todayDate.getFullYear()}.${formatDate(todayDate.getMonth() + 1)}.${formatDate(todayDate.getDate())}`}</Text>

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
        </Layout>
    );
}

export default TodayQuestion;

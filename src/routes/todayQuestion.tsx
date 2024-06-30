import { useLoaderData } from 'react-router-dom';
import { QuestionType } from '@type/QuestionType.ts';
import { TEMP_CONTENT, TEMP_TITLE } from '@/constants/temp.ts';

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
        userAnswered: true
        // answer: '',
        // userAnswered: false
    };
}

function TodayQuestion() {
    const data = useLoaderData() as QuestionType;

    const todayDate = new Date();

    const formatDate = (date: number) => {
        if (date.toString().length === 1) {
            return '0' + date;
        }
        return date;
    };

    /**
     * 오늘 날짜
     * 오늘 질문
     * 버튼 (작성 / 수정) => 작성 여부에 따라
     * */
    return (
        <div style={{ border: '2px solid pink' }}>
            <p>{`${todayDate.getFullYear()}.${formatDate(todayDate.getMonth() + 1)}.${formatDate(todayDate.getDay())}`}</p>

            <h1>{data.question}</h1>

            {data.answer && <span>{data.answer}</span>}

            <button>{data.userAnswered ? '확인하러 가기' : '작성하러 가기'}</button>
        </div>
    );
}

export default TodayQuestion;

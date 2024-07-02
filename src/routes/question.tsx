import { LoaderFunctionArgs, redirect, useLoaderData } from 'react-router-dom';
import { TEMP_CONTENT, TEMP_TITLE } from '@/constants/temp.ts';
import { MODE } from '@/constants/question.ts';
import QuestionInput from '@feature/question/QuestionInput.tsx';
import { ModeType } from '@type/QuestionType.ts';
import { Layout } from '@styles/Common.style.tsx';
// import { api } from '@lib/api/client.ts';

// todo: temp
type QuestionType = {
    questionId: number;
    questionTitle: string;
    questionContent: string;
    mode: ModeType;
};

export async function loader({ request, params }: LoaderFunctionArgs) {
    const url = new URL(request.url);

    if (!params.questionId) {
        return redirect('/');
    }

    // const response = await api.GET('/qu'); // todo: qeustion id 에 대한 글 조회 api 없음
    const typeParam = url.searchParams.get('type');

    return {
        questionId: 1,
        questionTitle: TEMP_TITLE,
        questionContent: TEMP_CONTENT,
        mode: typeParam === MODE.WRITE ? MODE.WRITE : typeParam === MODE.EDIT ? MODE.EDIT : null
    };
}

function Question() {
    const questionLoaderData = useLoaderData() as QuestionType;
    const { mode, ...questionData } = questionLoaderData;

    return (
        <Layout>
            <h1>이야기 {mode && (mode === MODE.WRITE ? '작성' : '수정')}</h1>

            <p>{questionData.questionTitle}</p>

            {mode ? (
                <QuestionInput mode={mode} questionData={questionData} />
            ) : (
                <div>{questionData.questionContent}</div>
            )}
        </Layout>
    );
}

export default Question;

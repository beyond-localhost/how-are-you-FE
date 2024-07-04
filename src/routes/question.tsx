import { MODE } from '@/constants/question.ts';
import QuestionInput from '@feature/question/QuestionInput.tsx';
import { api } from '@lib/api/client.ts';
import { Layout } from '@styles/Common.style.tsx';
import { ModeType } from '@type/QuestionType.ts';
import { LoaderFunctionArgs, useLoaderData, useRouteError } from 'react-router-dom';

// todo: temp
type QuestionType = {
    questionId: number;
    questionTitle: string;
    questionContent: string;
    mode: ModeType;
};

export async function loader({ request, params }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const typeParam = url.searchParams.get('type');

    if (!params.questionId) {
        throw new Error('');
    }

    const response = await api.GET('/questions/{id}/answers', {
        params: {
            path: {
                id: params.questionId
            },
            query: {
                type: 'me'
            }
        }
    });
    if (response.error) {
        throw new Error('');
    }

    return {
        ...response.data,
        mode: typeParam === MODE.WRITE ? MODE.WRITE : typeParam === MODE.EDIT ? MODE.EDIT : null
    };

    // return {
    //     questionId: 1,
    //     questionTitle: TEMP_TITLE,
    //     questionContent: TEMP_CONTENT,
    //     mode: typeParam === MODE.WRITE ? MODE.WRITE : typeParam === MODE.EDIT ? MODE.EDIT : null
    // };
}

export function QuestionErrorBoundary() {
    const error = useRouteError();
    console.log(error);
    return null;
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

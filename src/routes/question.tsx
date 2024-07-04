import { api } from '@lib/api/client.ts';

import { LoaderFunctionArgs, useRouteError } from 'react-router-dom';

export async function loader({ params }: LoaderFunctionArgs) {
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
        throw new Error('failed to fetch today answer');
    }
}

export function QuestionErrorBoundary() {
    const error = useRouteError();
    console.log(error);
    return null;
}

function Question() {
    return null;
    // const questionLoaderData = useLoaderData() as QuestionType;
    // const { mode, ...questionData } = questionLoaderData;

    // return (
    //     <Layout>
    //         <h1>이야기 {mode && (mode === MODE.WRITE ? '작성' : '수정')}</h1>

    //         <p>{questionData.questionTitle}</p>

    //         {mode ? (
    //             <QuestionInput mode={mode} questionData={questionData} />
    //         ) : (
    //             <div>{questionData.questionContent}</div>
    //         )}
    //     </Layout>
    // );
}

export default Question;

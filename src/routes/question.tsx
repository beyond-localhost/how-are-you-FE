import { QuestionAnswerType } from '@/type/QuestionType';
import { api } from '@lib/api/client.ts';
import {
    CursorBar,
    Layout,
    NavigationContainer,
    TitleContainer
} from '@feature/question/styles/Question.style';

import { LoaderFunctionArgs, useLoaderData, useRouteError } from 'react-router-dom';
import { useContext } from 'react';
import { HeaderContext } from './HeaderLayout';
import { Text } from '@components/text/Text';
import { mauve } from '@/tokens/color';
import QuestionInput from '@/feature/question/QuestionInput';

export async function loader({ params }: LoaderFunctionArgs) {
    if (!params.questionId) {
        throw new Error('');
    }

    const response = await api.GET('/questions/{id}/answers', {
        params: {
            path: {
                id: params.questionId
            }
        }
    });

    if (response.error) {
        throw new Error('failed to fetch today answer');
    }

    return response.data;
}

export function QuestionErrorBoundary() {
    const error = useRouteError();
    console.log(error);
    return null;
}

function Question() {
    const { height: headerHeight } = useContext(HeaderContext);
    const { question, answer } = useLoaderData() as QuestionAnswerType;
    const userAnswered = answer !== null;

    return (
        <Layout deductedHeight={headerHeight}>
            <NavigationContainer>
                <CursorBar />
                <Text size={3} weight="bold" color={mauve[10]} as="h1">
                    이야기 작성
                </Text>
            </NavigationContainer>
            <TitleContainer>
                <Text size={6} weight="bold" color={mauve[12]} as="h2">
                    {question.question}
                </Text>
            </TitleContainer>
            <QuestionInput initialText={userAnswered ? answer.answer : ''} />
        </Layout>
    );
}

export default Question;

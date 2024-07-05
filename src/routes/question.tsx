import { QuestionAnswerType } from '@/type/QuestionType';
import {
    CursorBar,
    Layout,
    NavigationContainer,
    TitleContainer
} from '@feature/question/styles/Question.style';
import { api } from '@lib/api/client.ts';

import QuestionDetail from '@/feature/question/QuestionDetail';
import QuestionInput from '@/feature/question/QuestionInput';
import { mauve } from '@/tokens/color';
import { Text } from '@components/text/Text';
import { useContext } from 'react';
import { LoaderFunctionArgs, useLoaderData, useNavigate } from 'react-router-dom';
import { HeaderContext } from './HeaderLayout';

export async function loader({ params }: LoaderFunctionArgs) {
    let mode = params.mode;
    if (!mode) {
        mode = 'read';
    } else if (['edit', 'write'].includes(mode)) {
        mode = 'write';
    }

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

    return { ...response.data, mode };
}

function Question() {
    const { height: headerHeight } = useContext(HeaderContext);
    const navigate = useNavigate();
    const { question, answer, mode } = useLoaderData() as QuestionAnswerType & {
        mode: 'read' | 'write';
    };

    const userAnswer = answer?.answer ?? '';
    const title = mode === 'read' ? '이야기' : '이야기 작성';

    return (
        <Layout deductedHeight={headerHeight}>
            <NavigationContainer>
                <CursorBar />
                <Text size={3} weight="bold" color={mauve[10]} as="h1">
                    {title}
                </Text>
            </NavigationContainer>
            <TitleContainer>
                <Text size={6} weight="bold" color={mauve[12]} as="h2">
                    {question.question}
                </Text>
            </TitleContainer>
            {mode === 'write' ? (
                <QuestionInput initialText={userAnswer} />
            ) : (
                <QuestionDetail
                    answer={userAnswer}
                    onFABClick={() => {
                        navigate('write', { replace: true });
                    }}
                />
            )}
        </Layout>
    );
}

export default Question;

import { api } from '@lib/api/client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { ActionFunctionArgs, Form, redirect } from 'react-router-dom';
import {
    QuestionAnswerForm,
    QuestionSubmitButtion,
    QuestionSubmitButtionContainer,
    QuestionTextArea,
    TextAreaLength
} from './styles/Question.style';
import PlusIcon from '@components/icons/PlusIcon';
import { mauve, violet } from '@/tokens/color';
import { FixedContainer } from '@styles/Common.style';

export async function action({ request, params }: ActionFunctionArgs) {
    const formData = await request.formData();
    const content = formData.get('question');
    const questionId = params.questionId;

    if (!questionId || !content) {
        throw new Error('Failed to action on QuestionInput: questionId does not exist');
    }

    await api.POST('/questions/{id}/answers', {
        params: { path: { id: questionId } },
        body: { answer: content.toString() }
    });
    return redirect('/today-question');
}

type Props = {
    initialText: string;
};

function QuestionInput({ initialText }: Props) {
    const texareaRef = useRef<HTMLTextAreaElement>(null);

    const [inputValue, setInputValue] = useState(initialText);
    const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);

        const { current: textarea } = texareaRef;

        if (!textarea) {
            return;
        }

        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    useLayoutEffect(() => {
        const { current: textarea } = texareaRef;

        if (!textarea) {
            return;
        }

        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }, []);

    return (
        <>
            <TextAreaLength as="p" size={2} weight="medium">
                {inputValue.length}/200
            </TextAreaLength>
            <QuestionAnswerForm method="post">
                <QuestionTextArea
                    ref={texareaRef}
                    name="question"
                    placeholder="나에 대해 알아가는 시간을 가져보세요"
                    maxLength={200}
                    value={inputValue}
                    onChange={handleValueChange}
                    autoFocus
                />
                <QuestionSubmitButtionContainer bottom={60}>
                    <QuestionSubmitButtion disabled={inputValue.length === 0}>
                        <PlusIcon color={violet[1]} />
                    </QuestionSubmitButtion>
                </QuestionSubmitButtionContainer>
            </QuestionAnswerForm>
        </>
    );
}

export default QuestionInput;

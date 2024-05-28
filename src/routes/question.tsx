import { ActionFunctionArgs, Form, useLoaderData } from 'react-router-dom';
import { api } from '@lib/api/client.ts';
import { AUTH } from '@/constants/auth.ts';
import React, { useState } from 'react';

type Question = {
    id: number;
    question: string;
};

export async function loader() {
    const accessToken = localStorage.getItem(AUTH.ACCESS_TOKEN_KEY); // todo: 공통화
    const response = await api.GET('/questions/today', {
        params: {
            header: {
                authorization: `Bearer ${accessToken}`
            }
        }
    });

    if (response.error) {
        return alert('문제가 발생했습니다. 다시 시도해주세요.'); // todo
    }

    // todo: 답변 (여부)
    return response.data;
}

export async function action({ request }: ActionFunctionArgs) {
    // todo: 해당 영역 개발중
    const formData = await request.formData();
    const inputValue = formData.get('question');

    // return redirect(`/question`);
    return inputValue;
}

function Question() {
    const data = useLoaderData() as Question;
    const [inputValue, setInputValue] = useState('');

    if (!data) {
        return <div />; // todo: error page
    }

    const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div style={{ border: '2px solid pink' }}>
            <h1>{data.question}</h1>
            <Form method="post">
                <textarea
                    name="question"
                    placeholder="오늘 하루를 되돌아보며 답변을 작성해주세요"
                    style={{ resize: 'none' }}
                    maxLength={200}
                    value={inputValue}
                    onChange={handleValueChange}
                />
                <p>{inputValue.length}/200</p>
                <button type="submit">완료</button>
            </Form>
        </div>
    );
}

export default Question;

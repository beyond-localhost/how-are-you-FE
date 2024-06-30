import { api } from '@lib/api/client.ts';
import { showErrorAlert } from '@/utils/error.ts';
import { useLoaderData } from 'react-router-dom';
import { QuestionListType } from '@type/QuestionType.ts';
import { useState } from 'react';
import QuestionListFilterPopup from '@feature/question/QuestionListFilterPopup.tsx';
import { TEMP_CONTENT, TEMP_TITLE } from '@/constants/temp.ts';

// todo: 월 별 Filter
export async function loader() {
    // const response = await api.GET('/questions/answers', {
    //     // todo
    //     params: {
    //         query: {
    //             startYear: '2024',
    //             startMonth: '3',
    //             endYear: '2024',
    //             endMonth: '3'
    //         }
    //     }
    // });
    // if (response.error) {
    //     showErrorAlert();
    // }
    // return response;
    return {
        hasMore: false,
        nextCursor: null,
        data: [
            {
                questionId: 1,
                question: TEMP_CONTENT,
                answer: TEMP_TITLE
            }
        ]
    };
}

function QuestionList() {
    const questionListLoaderData = useLoaderData() as QuestionListType; // todo
    const { hasMore, nextCursor, data: questionListData } = questionListLoaderData;

    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const [questionListData, setQuestionListData] = useState(questionListLoaderData);

    console.log(hasMore, nextCursor);

    const toggleFilterPopup = () => {
        setIsFilterPopupOpen(prevState => !prevState);
    };

    return (
        <>
            <div>
                <h1>기록</h1>
                <button onClick={toggleFilterPopup}>Filter</button>
            </div>

            <div>
                {questionListData.length > 0 ? (
                    questionListData.map(item => (
                        // todo: date
                        <div key={item.questionId}>
                            <p>날짜</p>
                            <p>{item.question}</p>
                            <p>{item.answer}</p>
                            <button>더보기</button>
                        </div>
                    ))
                ) : (
                    <div />
                )}
            </div>

            {isFilterPopupOpen && <QuestionListFilterPopup toggleFilterPopup={toggleFilterPopup} />}
        </>
    );
}

export default QuestionList;

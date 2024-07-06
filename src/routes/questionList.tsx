// import { api } from '@lib/api/client.ts';
// import { showErrorAlert } from '@/utils/error.ts';
import { useLoaderData } from 'react-router-dom';
import { QuestionListType } from '@type/QuestionType.ts';
import { useState } from 'react';
import QuestionListFilterPopup from '@feature/question/QuestionListFilterPopup.tsx';
import { TEMP_CONTENT, TEMP_DATE, TEMP_TITLE } from '@/constants/temp.ts';
import FunnelIcon from '@components/icons/FunnelIcon.tsx';
import {
    FunnelButton,
    SubTitleLeftDiv,
    SubTitleLeftLine,
    SubTitleWrapper
} from '@feature/question/styles/QuestionList.style.tsx';
import { Text } from '@components/text/Text.tsx';
import { mauve } from '@/tokens/color.ts';

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

    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const [questionListData, setQuestionListData] = useState(questionListLoaderData);
    // const { hasMore, nextCursor, data: questionList } = questionListData;
    const { data: questionList } = questionListData;

    const toggleFilterPopup = () => {
        setIsFilterPopupOpen(prevState => !prevState);
    };

    const onSetQuestionListData = (data: QuestionListType) => {
        setQuestionListData(data);
        toggleFilterPopup();
    };

    return (
        <>
            <SubTitleWrapper>
                <SubTitleLeftDiv>
                    <SubTitleLeftLine />
                    <Text size={3} weight="bold" color={mauve['10']} as={'h1'}>
                        기록
                    </Text>
                </SubTitleLeftDiv>
                <FunnelButton onClick={toggleFilterPopup}>
                    <FunnelIcon />
                </FunnelButton>
            </SubTitleWrapper>

            <div>
                {questionList.length > 0 ? (
                    questionList.map(item => (
                        // todo: mock date
                        <div key={item.questionId}>
                            <p>{TEMP_DATE}</p>
                            <p>{item.question}</p>
                            <p>{item.answer}</p>
                            <button>더보기</button>
                        </div>
                    ))
                ) : (
                    <div />
                )}
            </div>

            {isFilterPopupOpen && (
                <QuestionListFilterPopup
                    toggleFilterPopup={toggleFilterPopup}
                    onSetQuestionListData={onSetQuestionListData}
                />
            )}
        </>
    );
}

export default QuestionList;

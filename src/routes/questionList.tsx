import { useLoaderData } from 'react-router-dom';
import {
    filterDateType,
    onSetQuestionListDataProp,
    QuestionListDataType
} from '@type/QuestionType.ts';
import { useState } from 'react';
import FunnelIcon from '@components/icons/FunnelIcon.tsx';
import {
    FunnelButton,
    QuestionListContainer,
    QuestionListEmptySet,
    QuestionListWrapper,
    SubTitleLeftDiv,
    SubTitleLeftLine,
    SubTitleWrapper
} from '@feature/question/styles/QuestionList.style.tsx';
import { Text } from '@components/text/Text.tsx';
import { mauve, violet } from '@/tokens/color.ts';
import QuestionListItem from '@feature/question/QuestionListItem.tsx';
import QuestionListFilterPopup from '@feature/question/QuestionListFilterPopup.tsx';
import FunnelFilledIcon from '@components/icons/FunnelFilledIcon.tsx';
import { getQuestionList } from '@/apis/question.ts';

export async function loader() {
    return await getQuestionList({
        year: '2024',
        month: '3'
    });
}

function QuestionList() {
    const questionListLoaderData = useLoaderData() as QuestionListDataType;

    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const [questionListData, setQuestionListData] = useState(questionListLoaderData);
    const [filteredDate, setFilteredDate] = useState<filterDateType>({ year: '', month: '' });

    // const { hasMore, data: questionList } = questionListData;
    const { list: questionList } = questionListData;
    const isFunnelButtonActive = !!filteredDate.year; // 필터 여부

    const toggleFilterPopup = () => {
        setIsFilterPopupOpen(prevState => !prevState);
    };

    const onSetQuestionListData = async ({ year, month }: onSetQuestionListDataProp) => {
        try {
            toggleFilterPopup();

            const response = await getQuestionList({ year, month });

            setFilteredDate({ year, month });
            setQuestionListData(response);
        } catch (e) {
            alert('문제가 발생했습니다. 다시 시도해주세요');
        }
    };

    return (
        <QuestionListContainer>
            <SubTitleWrapper>
                <SubTitleLeftDiv>
                    <SubTitleLeftLine />
                    <Text size={3} weight="bold" color={mauve['10']} as={'h1'}>
                        기록
                    </Text>
                </SubTitleLeftDiv>
                <FunnelButton onClick={toggleFilterPopup} active={isFunnelButtonActive}>
                    {isFunnelButtonActive ? <FunnelFilledIcon /> : <FunnelIcon />}

                    {isFunnelButtonActive && (
                        <Text size={3} weight="bold" color={violet['11']}>
                            {filteredDate.year}년 {filteredDate.month}월
                        </Text>
                    )}
                </FunnelButton>
            </SubTitleWrapper>

            <QuestionListWrapper>
                {questionList.length > 0 ? (
                    questionList.map(item => <QuestionListItem item={item} key={item.questionId} />)
                ) : (
                    <QuestionListEmptySet>등록된 기록이 없어요 😭</QuestionListEmptySet>
                )}
            </QuestionListWrapper>

            {isFilterPopupOpen && (
                <QuestionListFilterPopup
                    toggleFilterPopup={toggleFilterPopup}
                    onSetQuestionListData={onSetQuestionListData}
                    filteredDate={filteredDate}
                />
            )}
        </QuestionListContainer>
    );
}

export default QuestionList;

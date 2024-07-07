import React, { useState } from 'react';
import { api } from '@lib/api/client.ts';
import { QuestionListType } from '@type/QuestionType.ts';
import {
    ListFilterButton,
    ListFilterPopup,
    ListFilterPopupButtons,
    ListFilterPopupInputs,
    ListFilterPopupOverlay
} from '@feature/question/styles/QuestionList.style.tsx';
import { Text } from '@components/text/Text.tsx';
import { mauve, violet } from '@/tokens/color.ts';

type QuestionListFilterPopupProp = {
    toggleFilterPopup: () => void;
    onSetQuestionListData: (data: QuestionListType) => void;
};

type handleInputChangeProp = {
    e: React.ChangeEvent<HTMLInputElement>;
    type: 'year' | 'month';
};

function QuestionListFilterPopup({
    toggleFilterPopup,
    onSetQuestionListData
}: QuestionListFilterPopupProp) {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');

    const handleFiltering = async () => {
        if (!year || !month) {
            alert('날짜를 모두 입력해주세요');
            return;
        }

        const yearValue = Number(year);
        const monthValue = Number(month);

        if (
            isNaN(yearValue) ||
            isNaN(monthValue) ||
            yearValue < 1900 ||
            monthValue < 1 ||
            monthValue > 12
        ) {
            alert('유효하지 않은 날짜입니다.');
            return;
        }

        const curDate = new Date();

        const response = await api.GET('/questions/answers', {
            params: {
                query: {
                    startYear: year.toString(),
                    startMonth: month.toString(),
                    endYear: curDate.getFullYear().toString(),
                    endMonth: (curDate.getMonth() + 1).toString()
                }
            }
        });

        if (response.error || !response.data) {
            alert('문제가 발생했습니다. 다시 시도해주세요.');
            toggleFilterPopup();
            return;
        }

        onSetQuestionListData(response.data);
    };

    const handleInputChange = ({ e, type }: handleInputChangeProp) => {
        const value = e.target.value;
        const isYearType = type === 'year';
        const maxLength = isYearType ? 4 : 2;

        if (value.length > maxLength) {
            return;
        }

        if (isYearType) {
            setYear(value);
        } else {
            setMonth(value);
        }
    };

    return (
        <ListFilterPopupOverlay>
            <ListFilterPopup>
                <Text size={7} weight="bold" color={violet['11']} style={{ marginBottom: '8px' }}>
                    기록 필터링
                </Text>
                <Text size={3} weight="medium" color={mauve['11']}>
                    언제부터 작성한 글을 볼까요?
                </Text>

                <ListFilterPopupInputs>
                    <div>
                        <input
                            type={'number'}
                            value={year}
                            onChange={e => {
                                handleInputChange({ e, type: 'year' });
                            }}
                        />
                        년
                    </div>
                    <div>
                        <input
                            type={'number'}
                            value={month}
                            onChange={e => {
                                handleInputChange({ e, type: 'month' });
                            }}
                        />
                        월
                    </div>
                </ListFilterPopupInputs>

                <ListFilterPopupButtons>
                    <ListFilterButton onClick={toggleFilterPopup}>
                        <Text size={3} weight="bold" color={mauve['10']}>
                            취소
                        </Text>
                    </ListFilterButton>
                    <ListFilterButton onClick={handleFiltering} active={true}>
                        <Text size={3} weight="bold" color={mauve['1']}>
                            필터링
                        </Text>
                    </ListFilterButton>
                </ListFilterPopupButtons>
            </ListFilterPopup>
        </ListFilterPopupOverlay>
    );
}

export default QuestionListFilterPopup;

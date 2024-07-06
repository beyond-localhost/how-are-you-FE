import { useRef } from 'react';
import { api } from '@lib/api/client.ts';
import { QuestionListType } from '@type/QuestionType.ts';
import {
    ListFilterButton,
    ListFilterPopup,
    ListFilterPopupOverlay
} from '@feature/question/styles/QuestionList.style.tsx';
import { Text } from '@components/text/Text.tsx';

type QuestionListFilterPopupProp = {
    toggleFilterPopup: () => void;
    onSetQuestionListData: (data: QuestionListType) => void;
};

function QuestionListFilterPopup({
    toggleFilterPopup,
    onSetQuestionListData
}: QuestionListFilterPopupProp) {
    const yearRef = useRef<HTMLInputElement>(null);
    const monthRef = useRef<HTMLInputElement>(null);

    const handleFiltering = async () => {
        const year = Number(yearRef.current?.value);
        const month = Number(monthRef.current?.value);

        if (year < 1900 || month < 1 || month > 12) {
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

    return (
        <ListFilterPopupOverlay>
            <ListFilterPopup>
                <Text>기록 필터링</Text>
                <Text>언제부터 작성한 글을 볼까요?</Text>
                <input type={'number'} name="filterYear" ref={yearRef} />년
                <input type={'number'} name="filterMonth" ref={monthRef} />월
                <ListFilterButton onClick={toggleFilterPopup}>취소</ListFilterButton>
                <ListFilterButton onClick={handleFiltering} active={true}>
                    필터링
                </ListFilterButton>
            </ListFilterPopup>
        </ListFilterPopupOverlay>
    );
}

export default QuestionListFilterPopup;

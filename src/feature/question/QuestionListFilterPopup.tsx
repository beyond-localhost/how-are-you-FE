import { useRef } from 'react';
import { api } from '@lib/api/client.ts';

type QuestionListFilterPopupProp = {
    toggleFilterPopup: () => void;
};

function QuestionListFilterPopup({ toggleFilterPopup }: QuestionListFilterPopupProp) {
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
        console.log(response);
    };

    return (
        <div>
            <h1>기록 필터링</h1>
            <p>언제부터 작성한 글을 볼까요?</p>
            <input type={'number'} name="filterYear" ref={yearRef} />년
            <input type={'number'} name="filterMonth" ref={monthRef} />월
            <button onClick={toggleFilterPopup}>취소</button>
            <button onClick={handleFiltering}>필터링</button>
        </div>
    );
}

export default QuestionListFilterPopup;

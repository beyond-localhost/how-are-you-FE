import { TEMP_DATE } from '@/constants/temp.ts';
import { QuestionListDataType } from '@type/QuestionType.ts';
import {
    QuestionListItemContent,
    QuestionListItemWrapper
} from '@feature/question/styles/QuestionList.style.tsx';
import { mauve } from '@/tokens/color.ts';
import { Text } from '@components/text/Text.tsx';
import CareRightIcon from '@components/icons/CareRightIcon.tsx';
import { useNavigate } from 'react-router-dom';

type QuestionListItemProp = {
    item: QuestionListDataType['list'][number];
};

function QuestionListItem({ item }: QuestionListItemProp) {
    const navigate = useNavigate();

    const goToItemContent = () => {
        navigate(`/question/${item.questionId}/answers`);
    };

    return (
        <QuestionListItemWrapper onClick={goToItemContent}>
            <Text size={1} weight="medium" color={mauve['10']}>
                {TEMP_DATE}
            </Text>
            <Text size={2} weight="bold" color={mauve['12']}>
                {item.question}
            </Text>

            <QuestionListItemContent>
                <Text size={1} weight="medium" color={mauve['10']}>
                    {item.answer}
                </Text>

                <CareRightIcon />
            </QuestionListItemContent>
        </QuestionListItemWrapper>
    );
}

export default QuestionListItem;

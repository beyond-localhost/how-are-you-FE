import { TEMP_DATE } from '@/constants/temp.ts';
import { QuestionListItemType } from '@type/QuestionType.ts';
import {
    QuestionListItemContent,
    QuestionListItemWrapper
} from '@feature/question/styles/QuestionList.style.tsx';
import { mauve } from '@/tokens/color.ts';
import { Text } from '@components/text/Text.tsx';
import CareRightIcon from '@components/icons/CareRightIcon.tsx';

type QuestionListItemProp = {
    item: QuestionListItemType[0]; // todo: type check
};

function QuestionListItem({ item }: QuestionListItemProp) {
    return (
        <QuestionListItemWrapper>
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
                <button>
                    <CareRightIcon />
                </button>
            </QuestionListItemContent>
        </QuestionListItemWrapper>
    );
}

export default QuestionListItem;

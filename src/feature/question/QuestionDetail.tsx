import { mauve, violet } from '@/tokens/color';
import NotePencilIcon from '@components/icons/NotePencilIcon';
import {
    QuestionAnswerText,
    QuestionFAB,
    QuestionSubmitButtionContainer
} from './styles/Question.style';

type Props = {
    answer: string;
    onFABClick: () => void;
};
function QuestionDetail({ answer, onFABClick }: Props) {
    const userAnswered = answer !== '';
    const answerDisplay = userAnswered
        ? answer
        : '아직 답변을 작성하지 않으셨어요. 하단 버튼을 눌러 답변을 작성해보세요.';
    return (
        <>
            <QuestionAnswerText as="p" size={4} weight="medium" color={mauve[12]}>
                {answerDisplay}
            </QuestionAnswerText>
            <QuestionSubmitButtionContainer bottom={60}>
                <QuestionFAB onClick={onFABClick}>
                    <NotePencilIcon color={violet[1]} />
                </QuestionFAB>
            </QuestionSubmitButtionContainer>
        </>
    );
}

export default QuestionDetail;

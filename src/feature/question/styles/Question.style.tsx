import { mauve, violet } from '@/tokens/color';
import { Form } from 'react-router-dom';
import { Text } from '@components/text/Text';
import styled from '@emotion/styled';
import { Layout as CommonLayout, FixedContainer } from '@styles/Common.style';

export const CursorBar = styled.div`
    width: 2px;
    height: 16px;
    background-color: ${mauve[10]};
`;

export const Layout = styled(CommonLayout)<{ deductedHeight: number }>`
    display: block;
    height: calc(100dvh - ${props => props.deductedHeight}px);
`;

export const NavigationContainer = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    margin-top: 36px;
    padding: 0 20px;
`;

export const TitleContainer = styled.div`
    margin-top: 28px;
    margin-bottom: 40px;
    padding: 0 20px;
`;

export const QuestionAnswerForm = styled(Form)`
    margin: 16px 0;
`;

export const QuestionTextArea = styled.textarea`
    resize: none;
    width: 100%;
    padding: 16px 12px;
    border: none;
    background: inherit;
    max-height: 300px;

    border-block: 1px solid ${mauve[5]};

    /*
    ** The field-sizing property is valid css support but still experimental.
    ** We should enable this and implement the backward compatibility
    ** TODO(style): disable this warning
    */
    field-sizing: content;

    &:focus {
        outline: none;
    }
`;

export const TextAreaLength = styled(Text)`
    text-align: right;
    padding: 0 12px;
`;

export const QuestionAnswerText = styled(Text)`
    padding: 0 20px;
`;

export const QuestionSubmitButtionContainer = styled(FixedContainer)`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-right: 16px;
`;

export const QuestionFAB = styled.button`
    padding: 12px;
    border-radius: 9999px;
    background-color: ${violet[12]};
    border: none;

    &:disabled {
        background-color: ${mauve[4]};
    }

    transition: background-color ease-in-out 150ms;
`;

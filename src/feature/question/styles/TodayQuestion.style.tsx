import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';

export const TodayQuestionWrapper = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    border-radius: 12px;
    border: 1px solid ${violet['5']};
    background: ${mauve['1']};
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.25);

    margin: 80px 12px 72px 12px;
`;

export const TodayQuestionButton = styled.button`
    border-radius: 50px;
    background: ${violet['12']};
    color: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    padding: 14px 24px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
`;

import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';

export const QuestionListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 34px 16px 0;
`;

// region - 서브 헤더
export const SubTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SubTitleLeftDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const SubTitleLeftLine = styled.div`
    width: 2px;
    height: 16px;
    background: ${mauve['10']};
`;

export const FunnelButton = styled.button`
    display: inline-flex;
    padding: 4px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${mauve['3']};
    background-color: ${violet['1']};
`;
// endregion - 서브 헤더

// region - 질문 리스트
export const QuestionListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

export const QuestionListItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const QuestionListItemContent = styled.div`
    display: flex;
    align-items: center;
    padding-top: 16px;
`;
// endregion - 질문 리스트

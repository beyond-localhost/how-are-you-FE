import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';

type ListFilterButtonProp = {
    active?: boolean;
};

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
    cursor: pointer;
`;

export const QuestionListItemContent = styled.div`
    display: flex;
    align-items: center;
    align-self: stretch;
    padding: 16px 0;
    gap: 16px;
    border-bottom: 1px solid ${violet['6']};
`;

// endregion - 질문 리스트

// region - 필터 팝업
export const ListFilterPopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 20;
    background: rgba(0, 0, 0, 0.4);
    padding: 0 23px;
`;

export const ListFilterPopup = styled.div`
    border-radius: 20px;
    background: ${mauve['1']};
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

export const ListFilterPopupInputs = styled.div`
    display: flex;
    align-items: center;
    margin: 14px 0 37px 0;
`;

export const ListFilterPopupButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
`;

export const ListFilterButton = styled.button<ListFilterButtonProp>`
    background: ${props => (props.active ? violet['11'] : 'none')};
    color: ${props => (props.active ? mauve['1'] : mauve['10'])};
    padding: 8px 12px;
    border-radius: 12px;
    border: ${props => (props.active ? 'none' : `1px solid ${mauve['6']}`)};
`;

// endregion - 필터 팝업가

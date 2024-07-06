import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';

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

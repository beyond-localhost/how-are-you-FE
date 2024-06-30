import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';

export const GenderInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const GenderSelection = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
export const GenderInputRadio = styled.input`
    display: none;

    &:checked + label {
        background: ${violet['11']};
    }
`;

export const GenderInputIconBox = styled.label`
    border-radius: 12px;
    background: ${mauve['2']};
    box-shadow: 0px 3px 8px 0px ${mauve['6']};
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

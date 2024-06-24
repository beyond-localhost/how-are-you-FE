import styled from '@emotion/styled';
import { violet } from '@/tokens/color.ts';
import { fontSize, fontWeight } from '@/tokens/font.ts';

export const BirthInputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

export const BirthInput = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 4px;
    color: ${violet['11']};
    font-weight: ${fontWeight.bold};
  ...${fontSize['7']}
`;

export const BirthInputSelect = styled.select`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 4px;
    appearance: none;
    border-radius: 10px;
`;

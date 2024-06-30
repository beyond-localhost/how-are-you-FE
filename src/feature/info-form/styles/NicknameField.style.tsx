import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';
import { fontSize, fontWeight } from '@/tokens/font.ts';

export const NicknameInput = styled.input(props => ({
    display: 'flex',
    padding: '12px 16px',
    flexShrink: 0,
    marginBottom: '24px',
    borderRadius: '12px',
    outline: 'none',
    background: props.value ? violet['1'] : mauve['2'],
    border: `1px solid ${props.value ? violet['6'] : mauve['7']}`,
    color: props.value ? violet['11'] : mauve['9'],
    fontWeight: fontWeight.medium,
    ...fontSize['3'],

    '&:focus': {
        background: violet['2'],
        border: `1px solid ${violet['7']}`,
        color: violet['12']
    }
}));

export const NicknameCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const NicknameCheckbox = styled.input`
    display: none;

    &:checked + label {
        background: ${violet['11']};
        border: none;
    }
`;

export const NicknameCheckboxLabel = styled.label`
    width: 16px;
    height: 16px;

    border: 2px solid ${violet['8']};
    cursor: pointer;
    border-radius: 10px;
    user-select: none;
`;

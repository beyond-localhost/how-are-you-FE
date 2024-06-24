import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';
import { fontSize, fontWeight } from '@/tokens/font.ts';

type SelectListItemButtonType = {
    isSelected: boolean;
};

export const SelectListWrapper = styled.div`
    display: flex;
    gap: 16px 12px;
    flex-wrap: wrap;
`;

export const SelectListItemButton = styled.button<SelectListItemButtonType>(props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '12px',
    border: `1px solid ${props.isSelected ? violet['7'] : mauve['7']}`,
    background: `${props.isSelected ? violet['3'] : mauve['3']}`,
    color: `${props.isSelected ? violet['10'] : mauve['10']}`,
    fontWeight: fontWeight.bold,
    ...fontSize
}));

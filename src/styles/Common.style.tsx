import styled from '@emotion/styled';
import { violet } from '@/tokens/color.ts';
import { LayoutType } from '@type/commonStyleType.ts';

export const Container = styled.div`
    background: ${violet['1']};
    max-width: 430px;
    margin: 0 auto;
`;

export const Layout = styled.div<LayoutType>`
    height: 100dvh; // # dvh !!
    background: ${props => (props.showHeaderDrawer ? '#d9d9d9' : 'none')};
`;

/**
 * FixedContainer is used for fixed layout within container
 * Developer must used this property with top, left, bottom, right correctly.
 * The each unit of adjust property should be calculated to the px
 */
export const FixedContainer = styled.div<{
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}>`
    position: fixed;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    right: ${props => props.right}px;
    bottom: ${props => props.bottom}px;
`;

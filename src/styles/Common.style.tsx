import styled from '@emotion/styled';
import { violet } from '@/tokens/color.ts';

export const Container = styled.div`
    background: ${violet['1']};
    max-width: 430px;
    border: 1px solid mediumpurple; // todo: remove
    margin: 0 auto;
`;

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100dvh; // # dvh !!
`;

import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';
import { Text } from '@components/text/Text.tsx';
import { fontSize, fontWeight } from '@/tokens/font.ts';

const HEADER_HEIGHT = 72;

export const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: -1px;

    padding: 20px 16px;
    width: 100%;
    height: ${HEADER_HEIGHT}px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: ${violet[3]};

    z-index: 999;
`;

export const HeaderText = styled(Text)`
    font-style: italic;
`;

// Drawer
export const DrawerToggleButton = styled.button<{ showHeaderDrawer?: boolean }>`
    background: none;
    border: none;
    margin-bottom: ${props => (props.showHeaderDrawer ? '32px' : '0')};
`;

export const DrawerWrap = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 0;
    right: 0;

    height: 100dvh;
    width: 302px;
    padding: 24px 16px;

    background: ${violet['1']};
    box-shadow:
        0px 4px 30px 0px rgba(0, 0, 0, 0.12),
        0px 3px 17px 0px rgba(0, 0, 0, 0.04),
        0px 2px 8px 0px rgba(0, 0, 0, 0.04),
        0px 1px 17px 0px rgba(0, 0, 0, 0.04);
`;

export const DrawerTopWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const LogoutButton = styled.button`
    display: flex;
    padding: 4px 8px;
    border-radius: 8px;
    background: ${mauve['3']};
    border: none;
    font-weight: ${fontWeight.medium};
    ${fontSize['1']};
    color: ${mauve['11']};
    margin-bottom: 36px;
`;

export const DrawerLinkWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

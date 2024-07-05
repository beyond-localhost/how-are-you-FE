import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { createContext } from 'react';
import { Text } from '@components/text/Text';
import { violet } from '@/tokens/color';
import { Layout } from '@styles/Common.style';

interface HeaderContext {
    height: number;
}

const HEADER_HEIGHT = 72;
export const HeaderContext = createContext<HeaderContext>({ height: HEADER_HEIGHT });

export function HeaderLayout() {
    return (
        <HeaderContext.Provider value={{ height: HEADER_HEIGHT }}>
            <Layout>
                <Header>
                    <HeaderText size={5} weight="bold" color={violet[10]}>
                        How are you?
                    </HeaderText>
                </Header>
                <Outlet />
            </Layout>
        </HeaderContext.Provider>
    );
}

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    position: sticky;
    top: -1px;

    padding: 20px 16px;
    width: 100%;
    height: ${HEADER_HEIGHT}px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: ${violet[3]};
`;

const HeaderText = styled(Text)`
    font-style: italic;
`;

export default HeaderLayout;

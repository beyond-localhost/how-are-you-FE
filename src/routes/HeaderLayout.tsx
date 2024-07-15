import { Outlet } from 'react-router-dom';
import { createContext } from 'react';
import { Layout } from '@styles/Common.style';
import Header from '@components/header/Header.tsx';
import { useCommonStore } from '@/store/useCommonStore.tsx';

interface HeaderContext {
    height: number;
}

const HEADER_HEIGHT = 72;
export const HeaderContext = createContext<HeaderContext>({ height: HEADER_HEIGHT });

export function HeaderLayout() {
    const { showHeaderDrawer } = useCommonStore(state => state);
    return (
        <HeaderContext.Provider value={{ height: HEADER_HEIGHT }}>
            <Layout showHeaderDrawer={showHeaderDrawer}>
                <Header />
                <Outlet />
            </Layout>
        </HeaderContext.Provider>
    );
}

export default HeaderLayout;

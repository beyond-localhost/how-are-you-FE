import { violet } from '@/tokens/color.ts';
import { useState } from 'react';
import DrawerToggleIcon from '@components/icons/DrawerToggleIcon.tsx';
import {
    DrawerWrap,
    HeaderText,
    DrawerToggleButton,
    HeaderWrap,
    LogoutButton,
    DrawerTopWrap,
    DrawerLinkWrap
} from '@components/header/styles/Header.style.tsx';
import { Text } from '@components/text/Text.tsx';
import CustomLink from '@components/header/CustomLink.tsx';

function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = () => {
        setIsDrawerOpen(prevState => !prevState);
    };

    return (
        <HeaderWrap>
            <HeaderText size={5} weight="bold" color={violet[10]}>
                How are you?
            </HeaderText>

            {isDrawerOpen ? (
                <DrawerWrap>
                    <DrawerTopWrap>
                        <DrawerToggleButton onClick={toggleDrawerOpen} isDrawerOpen={isDrawerOpen}>
                            <DrawerToggleIcon isDrawerOpen={isDrawerOpen} />
                        </DrawerToggleButton>

                        <Text
                            size={3}
                            weight="bold"
                            color={violet['12']}
                            style={{ width: '100%', marginBottom: '16px' }}
                        >
                            닉네임
                        </Text>
                        <LogoutButton>로그아웃</LogoutButton>
                    </DrawerTopWrap>

                    <DrawerLinkWrap>
                        <CustomLink to={'/today-question'} text={'오늘의 이야기'} />
                        <CustomLink to={'/question-list'} text={'내 기록'} />
                    </DrawerLinkWrap>
                </DrawerWrap>
            ) : (
                <DrawerToggleButton onClick={toggleDrawerOpen}>
                    <DrawerToggleIcon isDrawerOpen={isDrawerOpen} />
                </DrawerToggleButton>
            )}
        </HeaderWrap>
    );
}

export default Header;

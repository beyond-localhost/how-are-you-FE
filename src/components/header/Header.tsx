import { violet } from '@/tokens/color.ts';
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
import NavigateBtn from '@components/header/NavigateBtn.tsx';
import { useCommonStore } from '@/store/useCommonStore.tsx';

function Header() {
    const { showHeaderDrawer, toggleHeaderDrawer, userNickname } = useCommonStore(state => state);

    return (
        <HeaderWrap>
            <HeaderText size={5} weight="bold" color={violet[10]}>
                How are you?
            </HeaderText>

            {showHeaderDrawer ? (
                <DrawerWrap>
                    <DrawerTopWrap>
                        <DrawerToggleButton
                            onClick={toggleHeaderDrawer}
                            showHeaderDrawer={showHeaderDrawer}
                        >
                            <DrawerToggleIcon showHeaderDrawer={showHeaderDrawer} />
                        </DrawerToggleButton>

                        <Text
                            size={3}
                            weight="bold"
                            color={violet['12']}
                            style={{ width: '100%', marginBottom: '16px' }}
                        >
                            {userNickname}
                        </Text>
                        <LogoutButton>로그아웃</LogoutButton>
                    </DrawerTopWrap>

                    <DrawerLinkWrap>
                        <NavigateBtn to={'/today-question'} text={'오늘의 이야기'} />
                        <NavigateBtn to={'/question-list'} text={'내 기록'} />
                    </DrawerLinkWrap>
                </DrawerWrap>
            ) : (
                <DrawerToggleButton onClick={toggleHeaderDrawer}>
                    <DrawerToggleIcon showHeaderDrawer={showHeaderDrawer} />
                </DrawerToggleButton>
            )}
        </HeaderWrap>
    );
}

export default Header;

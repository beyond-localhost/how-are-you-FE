import { violet } from '@/tokens/color.ts';
import DrawerToggleIcon from '@components/icons/DrawerToggleIcon.tsx';
import {
    DrawerWrap,
    DrawerToggleButton,
    HeaderWrap,
    LogoutButton,
    DrawerTopWrap,
    DrawerLinkWrap,
    HeaderTextButton
} from '@components/header/styles/Header.style.tsx';
import { Text } from '@components/text/Text.tsx';
import NavigateBtn from '@components/header/NavigateBtn.tsx';
import { useCommonStore } from '@/store/useCommonStore.tsx';
import { useNavigate } from 'react-router-dom';
import { api } from '@lib/api/client.ts';

function Header() {
    const navigate = useNavigate();
    const { showHeaderDrawer, toggleHeaderDrawer, userNickname } = useCommonStore(state => state);

    const goToMain = () => {
        navigate('/today-question');
    };

    const handleLogout = async () => {
        try {
            const response = await api.POST('/logout');
            if (response.error) {
                throw new Error('api error');
            }

            navigate('/login');
        } catch (e) {
            alert('로그아웃에 실패하였습니다. 다시 시도해주세요');
            console.error(e);
        }
    };

    return (
        <HeaderWrap>
            <HeaderTextButton onClick={goToMain}>How are you?</HeaderTextButton>

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
                        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
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

import styled from '@emotion/styled';
import { violet } from '@/tokens/color.ts';
import { Text } from '@components/text/Text.tsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HEADER_HEIGHT = 72;

function Header() {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);

    const toggleHeaderOpen = () => {
        setIsHeaderOpen(prevState => !prevState);
    };

    return (
        <HeaderWrap>
            <HeaderText size={5} weight="bold" color={violet[10]}>
                How are you?
            </HeaderText>
            <button onClick={toggleHeaderOpen}>토글</button>

            {isHeaderOpen && (
                <>
                    <span>닉네임</span>
                    <button>로그아웃</button>

                    <Link to={'/today-question'}>오늘의 이야기</Link>
                    <Link to={'/question-list'}>내 기록</Link>
                </>
            )}
        </HeaderWrap>
    );
}

export default Header;

const HeaderWrap = styled.header`
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

import BookThinIcon from '@components/icons/BookThinIcon.tsx';
import styled from '@emotion/styled';
import { fontSize, fontWeight } from '@/tokens/font.ts';
import { mauve, violet } from '@/tokens/color.ts';
import PencilThinIcon from '@components/icons/PencilThinIcon.tsx';
import { useNavigate } from 'react-router-dom';
import { useCommonStore } from '@/store/useCommonStore.tsx';

type CustomLinkProp = {
    to: string;
    text: '오늘의 이야기' | '내 기록';
};

function NavigateBtn({ to, text }: CustomLinkProp) {
    const navigate = useNavigate();
    const { toggleHeaderDrawer } = useCommonStore(state => state);

    const isLinkActive = to === location.pathname;

    const goToLink = () => {
        toggleHeaderDrawer();
        navigate(to);
    };

    return (
        <NavigateButton onClick={goToLink} to={to}>
            {text === '오늘의 이야기' && <BookThinIcon isActive={isLinkActive} />}
            {text === '내 기록' && <PencilThinIcon isActive={isLinkActive} />}
            {text}
        </NavigateButton>
    );
}

export default NavigateBtn;

const NavigateButton = styled.button<{ to: string }>`
    display: flex;
    padding: 8px 0px;
    gap: 8px;
    text-decoration: none;
    font-weight: ${fontWeight.medium};
    ${fontSize['3']};
    color: ${props => (props.to === location.pathname ? violet['11'] : mauve['11'])};
    background-color: ${props => (props.to === location.pathname ? violet['4'] : violet['1'])};
    border-radius: 4px;
    border: none;

    &:hover {
        background-color: ${violet['3']};
        color: ${violet['11']};
    }
`;

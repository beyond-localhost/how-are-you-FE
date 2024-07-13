import BookThinIcon from '@components/icons/BookThinIcon.tsx';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { fontSize, fontWeight } from '@/tokens/font.ts';
import { mauve, violet } from '@/tokens/color.ts';
import PencilThinIcon from '@components/icons/PencilThinIcon.tsx';

type CustomLinkProp = {
    to: string;
    text: '오늘의 이야기' | '내 기록';
};

function CustomLink({ to, text }: CustomLinkProp) {
    const isLinkActive = to === location.pathname;
    return (
        <DrawerLink to={to}>
            {text === '오늘의 이야기' && <BookThinIcon isActive={isLinkActive} />}
            {text === '내 기록' && <PencilThinIcon isActive={isLinkActive} />}
            {text}
        </DrawerLink>
    );
}

export default CustomLink;

const DrawerLink = styled(Link)<{ to: string }>`
    display: flex;
    padding: 8px 0px;
    gap: 8px;
    text-decoration: none;
    font-weight: ${fontWeight.medium};
    ${fontSize['3']};
    color: ${props => (props.to === location.pathname ? violet['11'] : mauve['11'])};
    background-color: ${props => (props.to === location.pathname ? violet['4'] : 'none')};
    border-radius: 4px;

    &:hover {
        background-color: ${violet['3']};
        color: ${violet['11']};
    }
`;

import { violet } from '@/tokens/color.ts';
import { activeStyleType } from '@type/commonStyleType.ts';

function BookThinIcon({ isActive }: activeStyleType) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="BookThin">
                <path
                    id="Vector"
                    d="M19.5 2.625H6.75C6.05381 2.625 5.38613 2.90156 4.89384 3.39384C4.40156 3.88613 4.125 4.55381 4.125 5.25V21C4.125 21.0995 4.16451 21.1948 4.23484 21.2652C4.30516 21.3355 4.40054 21.375 4.5 21.375H18C18.0995 21.375 18.1948 21.3355 18.2652 21.2652C18.3355 21.1948 18.375 21.0995 18.375 21C18.375 20.9005 18.3355 20.8052 18.2652 20.7348C18.1948 20.6645 18.0995 20.625 18 20.625H4.875V20.25C4.875 19.7527 5.07254 19.2758 5.42417 18.9242C5.77581 18.5725 6.25272 18.375 6.75 18.375H19.5C19.5995 18.375 19.6948 18.3355 19.7652 18.2652C19.8355 18.1948 19.875 18.0995 19.875 18V3C19.875 2.90054 19.8355 2.80516 19.7652 2.73484C19.6948 2.66451 19.5995 2.625 19.5 2.625ZM19.125 17.625H6.75C6.40062 17.6249 6.05474 17.6947 5.73273 17.8302C5.41073 17.9658 5.11909 18.1644 4.875 18.4144V5.25C4.875 4.75272 5.07254 4.27581 5.42417 3.92417C5.77581 3.57254 6.25272 3.375 6.75 3.375H19.125V17.625Z"
                    fill={isActive ? violet['11'] : '#65636D'}
                />
            </g>
        </svg>
    );
}

export default BookThinIcon;

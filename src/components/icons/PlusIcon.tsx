import { SVGProps } from 'react';

const PlusIcon = (props?: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M35.625 20a1.875 1.875 0 0 1-1.875 1.875H21.875V33.75a1.875 1.875 0 1 1-3.75 0V21.875H6.25a1.875 1.875 0 1 1 0-3.75h11.875V6.25a1.875 1.875 0 1 1 3.75 0v11.875H33.75A1.875 1.875 0 0 1 35.625 20Z"
        />
    </svg>
);

export default PlusIcon;

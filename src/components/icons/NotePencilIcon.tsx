import { SVGProps } from 'react';
const NotePencilIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M35 20v12.5a2.5 2.5 0 0 1-2.5 2.5h-25A2.5 2.5 0 0 1 5 32.5v-25A2.5 2.5 0 0 1 7.5 5H20a1.25 1.25 0 1 1 0 2.5H7.5v25h25V20a1.25 1.25 0 0 1 2.5 0Zm.884-9.116-15 15a1.252 1.252 0 0 1-.884.366h-5A1.25 1.25 0 0 1 13.75 25v-5a1.252 1.252 0 0 1 .366-.884l15-15a1.25 1.25 0 0 1 1.768 0l5 5a1.25 1.25 0 0 1 0 1.768ZM33.228 10 30 6.767 28.017 8.75l3.233 3.233L33.228 10Z"
        />
    </svg>
);
export default NotePencilIcon;

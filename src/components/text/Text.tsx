import { fontSize, fontWeight } from '@/tokens/font.ts';
import { CSSProperties, ReactNode } from 'react';
import { css } from '@emotion/css';

type TextCommonProps = {
    children: ReactNode;
    size?: keyof typeof fontSize;
    weight?: keyof typeof fontWeight;
    color?: string;
};

type TextProps = TextCommonProps & {
    as?: keyof HTMLElementTagNameMap;
    style?: CSSProperties;
};

type TextLabelProps = TextCommonProps & {
    htmlFor: string;
};

export const Text = ({ children, as, size, weight, color, style }: TextProps) => {
    const Element: keyof HTMLElementTagNameMap = as || 'span';

    return (
        <Element
            className={css`
                ${color && `color: ${color}`};
                ${weight && `font-weight: ${fontWeight[weight]}`};
                ${size && { ...fontSize[size] }};
                ${style && { ...style }};
            `}
        >
            {children}
        </Element>
    );
};

export const TextLabel = ({ children, htmlFor, size, weight, color }: TextLabelProps) => {
    return (
        <label
            htmlFor={htmlFor}
            className={css`
                ${color && `color: ${color}`};
                ${weight && `font-weight: ${fontWeight[weight]}`};
                ${size && { ...fontSize[size] }};
            `}
        >
            {children}
        </label>
    );
};

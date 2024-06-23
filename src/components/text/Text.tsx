import { fontSize, fontWeight } from '@/tokens/font.ts';
import { CSSProperties, ReactNode } from 'react';

type TextProps = {
    children: ReactNode;
    as?: keyof HTMLElementTagNameMap;
    size?: keyof typeof fontSize;
    weight?: keyof typeof fontWeight;
    color?: string;
};

type TextLabelProps = {
    children: ReactNode;
    htmlFor: string;
    size?: keyof typeof fontSize;
    weight?: keyof typeof fontWeight;
    color?: string;
};

export const Text = ({ children, as, size, weight, color }: TextProps) => {
    const Element: keyof HTMLElementTagNameMap = as || 'span';
    const style: CSSProperties = size ? { ...fontSize[size] } : {};

    if (weight) {
        style['fontWeight'] = fontWeight[weight];
    }
    if (color) {
        style['color'] = color;
    }

    return <Element style={style}>{children}</Element>;
};

export const TextLabel = ({ children, htmlFor, size, weight, color }: TextLabelProps) => {
    const style: CSSProperties = size ? { ...fontSize[size] } : {};

    if (weight) {
        style['fontWeight'] = fontWeight[weight];
    }
    if (color) {
        style['color'] = color;
    }

    return (
        <label htmlFor={htmlFor} style={style}>
            {children}
        </label>
    );
};

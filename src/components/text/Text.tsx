import { fontSize, fontWeight } from '@/tokens/font.ts';
import { CSSProperties, ReactNode } from 'react';

type TextCommonProps = {
    children: ReactNode;
    size?: keyof typeof fontSize;
    weight?: keyof typeof fontWeight;
    color?: string;
};

type TextProps = TextCommonProps & {
    as?: keyof HTMLElementTagNameMap;
    style?: CSSProperties;
    className?: string;
};

type TextLabelProps = TextCommonProps & {
    htmlFor: string;
};

export const Text = ({
    children,
    as,
    size = 4,
    weight = 'medium',
    color,
    style,
    className
}: TextProps) => {
    const Element: keyof HTMLElementTagNameMap = as || 'span';

    return (
        <Element
            css={{
                color,
                fontWeight: fontWeight[weight],
                ...fontSize[size]
            }}
            className={className}
            style={style}
        >
            {children}
        </Element>
    );
};

export const TextLabel = ({ children, htmlFor, size = 4, weight, color }: TextLabelProps) => {
    return (
        <label
            htmlFor={htmlFor}
            css={{
                color,
                fontWeight: weight,
                ...fontSize[size]
            }}
        >
            {children}
        </label>
    );
};

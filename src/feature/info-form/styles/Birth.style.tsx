import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';
import { fontSize, fontWeight } from '@/tokens/font.ts';

export const BirthInputWrapper = styled.div`
    display: flex;
    font-weight: ${fontWeight.bold};

    // todo..
    & > div:nth-of-type(2) {
        padding-left: 50px;
    }
`;

export const BirthInputBox = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
`;

export const BirthInputLabel = styled.p`
    color: ${violet['11']};
    ${fontSize['7']};
    padding-left: 5px;
`;

// 셀렉트 박스
export const BirthInputSelect = styled.div`
    position: relative;
    border: 3px solid ${violet['8']};
    border-radius: 15px;
    padding: 6px 17%;

    color: ${mauve['11']};
    ${fontSize['6']};
    cursor: pointer;
`;

export const BirthInputOptionValue = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const BirthInputOptions = styled.ul`
    border: 2px solid ${mauve['8']};
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    height: 300px;
    overflow: scroll;
    position: absolute;

    list-style: none; // li tag 들의 앞에 점들 없어짐
    padding: 0; // ul의 자체 패딩
    width: 100%;
    left: 0;
    margin-top: 6px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BirthInputOption = styled.li`
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    &:hover {
        color: ${violet['8']};
    }
`;

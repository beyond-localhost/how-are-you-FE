import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';
import { fontSize, fontWeight } from '@/tokens/font.ts';

export const BirthInputWrapper = styled.div`
    display: flex;
    font-weight: ${fontWeight.bold};
    justify-content: space-between;
`;

export const BirthInputBox = styled.div`
    flex: 1;

    display: flex;
    justify-content: center;
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
    padding: 4px 12px;
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

    height: 205px;
    overflow-y: scroll;
    position: absolute;
    left: 0;
    top: calc(100% + 4px);

    list-style: none; // li tag 들의 앞에 점들 없어짐
    padding: 0; // ul의 자체 패딩
    /* width: 100%; */
    margin-top: 6px;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${violet['1']};

    &::-webkit-scrollbar {
        /* border-bottom-right-radius: inherit; */
        display: none;
    }
`;

export const BirthInputOption = styled.li`
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    &:hover {
        color: ${violet['8']};
    }
`;

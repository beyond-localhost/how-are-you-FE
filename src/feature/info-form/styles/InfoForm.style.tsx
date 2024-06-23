import styled from '@emotion/styled';
import { mauve, violet } from '@/tokens/color.ts';
import { fontSize } from '@/tokens/font.ts';

export const InfoFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100dvh; // # dvh !!

    width: 100%;
    padding: 40px 16px;
    border: 2px solid palegreen;
`;

export const FormStepContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 1px;
`;

export const InfoFormFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
`;

// todo: foooter 수정
export const FormFooter = styled.div`
    //padding: 0 22px;
    //position: absolute;
    //bottom: 40px;
    //margin: 0;
    //margin: 0;
    display: flex;
    gap: 8px;
    margin-top: auto;
    width: 100%;
`;

export const FormButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    background: ${violet['11']};
    border-radius: 12px;
    border: 0;
    flex: 1 0 0;

    &:disabled {
        background-color: ${mauve['7']};
    }
`;

export const InputTitle = styled.label`
    font-weight: bold;
    padding: 195px 0 72px 0;
    ${fontSize['7']};
`;

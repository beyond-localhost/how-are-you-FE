import styled from '@emotion/styled';
import { Layout } from '@styles/Common.style.tsx';

export const Title = styled.div`
    width: 100%;
    font-size: 50px;
    font-weight: 600;
    line-height: 68px;
    background: linear-gradient(180deg, #5746af 0%, #c4b8f3 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    bottom: 50%;
    display: flex;
    justify-content: center;
    font-style: italic;
`;

export const LoginLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginFooter = styled.div`
    position: absolute;
    bottom: 60px;
`;

export const AutoLoginDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 4px;
    margin-bottom: 14px;
`;

export const AutoLoginCheckBox = styled.input`
    width: 16px;
    height: 16px;
    cursor: pointer;
`;

export const LoginButton = styled.button`
    width: 335px;
    padding: 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 16px;
    background: #ffdc5e;
    border: 0;
`;

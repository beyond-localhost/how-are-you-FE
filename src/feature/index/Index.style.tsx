import styled from '@emotion/styled';

export const IndexLayout = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 432px 12px 60px 12px;
    gap: 322px;
`;

export const Title = styled.div`
    text-align: center;
    //-webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    //font-family: 'Room No.703'; // todo
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px; /* 113.333% */
    color: rebeccapurple;
`;

export const LoginButton = styled.div`
    display: flex;
    padding: 12px 120px; // todo: 바꿔씀
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 16px;
    background: #ffdc5e;
`;

export const LoginText = styled.span`
    color: #000;

    /* Text/4/Bold */
    //font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 144.444% */
`;

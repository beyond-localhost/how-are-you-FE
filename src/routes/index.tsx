import { api } from '@lib/api/client.ts';
import { useRef } from 'react';
import { BOOLEAN_STRING } from '@/constants/common.ts';
import { IndexLayout, LoginButton, LoginText, Title } from '@feature/index/Index.style.tsx';
import { KakaoIcon } from '@components/icons/KakaoIcon.tsx';

function Index() {
    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleKakaoClick = async () => {
        const isAutoLogin = checkboxRef.current?.checked
            ? BOOLEAN_STRING.TRUE
            : BOOLEAN_STRING.FALSE;

        const response = await api.POST('/auth/kakao', {
            body: {
                destination: `${import.meta.env.VITE_LOCAL_URL}/callback?autoLogin=${isAutoLogin}`
            }
        });

        if (response.error) {
            throw new Response('', { statusText: '로그인 실패' });
        }

        location.href = response.data.url;
    };

    return (
        <IndexLayout>
            <Title>How are you?</Title>

            <div>
                <LoginButton onClick={handleKakaoClick}>
                    <KakaoIcon />
                    <LoginText>카카오로 시작하기</LoginText>
                </LoginButton>
                {/*<button disabled>Google 로그인</button>*/}
                {/*<button disabled>이메일 로그인</button>*/}
            </div>

            {/*todo: check*/}
            {/*<div>*/}
            {/*    <input id="autoLogin" type="checkbox" ref={checkboxRef} />*/}
            {/*    <label htmlFor="autoLogin">자동로그인</label>*/}
            {/*</div>*/}
        </IndexLayout>
    );
}

export default Index;

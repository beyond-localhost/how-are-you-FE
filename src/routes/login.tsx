import { api } from '@lib/api/client.ts';
import { useRef } from 'react';
import { BOOLEAN_STRING } from '@/constants/common.ts';
import {
    AutoLoginCheckBox,
    AutoLoginDiv,
    LoginButton,
    LoginFooter,
    LoginLayout,
    Title
} from '@feature/index/styles/Index.style.tsx';
import { KakaoIcon } from '@components/icons/KakaoIcon.tsx';
import { Text } from '@components/text/Text.tsx';

function Login() {
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
        <LoginLayout>
            <Title>How are you?</Title>

            <LoginFooter>
                <AutoLoginDiv>
                    <AutoLoginCheckBox id="autoLogin" type="checkbox" ref={checkboxRef} />
                    <label htmlFor="autoLogin">자동로그인</label>
                </AutoLoginDiv>

                <LoginButton onClick={handleKakaoClick}>
                    <KakaoIcon />
                    <Text size={4} weight={'bold'}>
                        카카오로 시작하기
                    </Text>
                </LoginButton>
            </LoginFooter>
        </LoginLayout>
    );
}

export default Login;

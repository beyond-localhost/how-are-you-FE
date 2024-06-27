import { api } from '@lib/api/client.ts';
import { PageLayout } from '@components/StyledComponents.ts';
import { useRef } from 'react';
import { BOOLEAN_STRING } from '@/constants/common.ts';

export function loader() {
    return null;
}

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
        <PageLayout>
            <div>
                <h1>How</h1>
                <h1>are</h1>
                <h1>you</h1>
                <h1>?</h1>
            </div>

            <div>
                <button onClick={handleKakaoClick}>Kakao 로그인</button>
                <button disabled>Google 로그인</button>
                <button disabled>이메일 로그인</button>
            </div>

            <div>
                <input id="autoLogin" type="checkbox" ref={checkboxRef} />
                <label htmlFor="autoLogin">자동로그인</label>
            </div>
        </PageLayout>
    );
}

export default Index;

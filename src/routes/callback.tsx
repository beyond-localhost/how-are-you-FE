import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { api } from '@lib/api/client.ts';
import { AUTH } from '@/constants/auth.ts';
import { BOOLEAN_STRING } from '@/constants/common.ts';

export async function loader({ request }: LoaderFunctionArgs) {
    const searchParams = new URL(request.url).searchParams;
    const {
        access_token: accessToken,
        refresh_token: refreshToken,
        autoLogin
    } = Object.fromEntries(searchParams);

    // 로그인 실패
    if (!accessToken || !refreshToken) {
        return redirect('/');
    }

    const response = await api.GET('/me', {
        params: {
            header: {
                authorization: `Bearer ${accessToken}`
            }
        }
    });

    if (response.error) {
        return redirect('/');
    }

    // 자동 로그인
    if (autoLogin === 'T') {
        localStorage.setItem(AUTH.AUTO_LOGIN_KEY, BOOLEAN_STRING.TRUE);
        localStorage.setItem(AUTH.ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(AUTH.REFRESH_TOKEN_KEY, refreshToken);
    } else {
        if (localStorage.getItem(AUTH.AUTO_LOGIN_KEY)) {
            localStorage.removeItem(AUTH.AUTO_LOGIN_KEY);
        }
        sessionStorage.setItem(AUTH.ACCESS_TOKEN_KEY, accessToken);
        sessionStorage.setItem(AUTH.REFRESH_TOKEN_KEY, refreshToken);
    }

    if (response.data.profile) {
        return redirect('/question-list');
    }
    return redirect('/info-form');
}

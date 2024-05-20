import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { api } from '@lib/api/client.ts';
import {
    ACCESS_TOKEN_KEY,
    AUTO_LOGIN_KEY,
    REFRESH_TOKEN_KEY,
    TRUE_VALUE
} from '@/constants/login.ts';

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
        localStorage.setItem(AUTO_LOGIN_KEY, TRUE_VALUE);
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    } else {
        if (localStorage.getItem(AUTO_LOGIN_KEY)) {
            localStorage.removeItem(AUTO_LOGIN_KEY);
        }
        sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }

    if (response.data.profile) {
        return redirect('/question-list');
    }
    return redirect('/info-form');
}

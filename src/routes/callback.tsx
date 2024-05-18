import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function Callback() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const accessToken = searchParams.get('access_token');
        const refreshToken = searchParams.get('refresh_token');

        // 로그인 실패
        if (!(accessToken && refreshToken)) {
            navigate('/');
            return;
        }

        // 자동 로그인
        const autoLogin = searchParams.get('autoLogin');
        const LOGIN_KEY = 'HAY_login';
        const ACCESS_TOKEN_KEY = 'HAY_AT';
        const REFRESH_TOKEN_KEY = 'HAY_RT';
        if (autoLogin === 'T') {
            localStorage.setItem(LOGIN_KEY, 'T');
            localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
            localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
        } else if (localStorage.getItem(LOGIN_KEY)) {
            localStorage.removeItem(LOGIN_KEY);
            sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
            sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
        }

        // todo profile api 호출

        // 여부에 따라
        navigate('/info-form');
    }, [navigate, searchParams]);

    return <div></div>;
}

export default Callback;

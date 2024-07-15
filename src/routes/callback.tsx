import { redirect } from 'react-router-dom';
import { api } from '@lib/api/client.ts';
import { useCommonStore } from '@/store/useCommonStore.tsx';

export async function Loader() {
    const setUserNickname = useCommonStore(state => state.setUserNickname);
    const response = await api.GET('/users/me');

    // 로그인 실패
    if (response.error) {
        alert('로그인 실패');
        return redirect('/');
    }
    // 기본 정보 입력한 경우
    if (response.data && response.data.profile) {
        setUserNickname(response.data.profile.nickname);
        return redirect('/today-question');
    }
    // 기본 정보 입력 페이지
    return redirect('/info-form');
}

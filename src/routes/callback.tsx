import { redirect } from 'react-router-dom';
import { api } from '@lib/api/client.ts';

export async function loader() {
    const response = await api.GET('/users/me');

    // 로그인 실패
    if (response.error) {
        alert('로그인 실패');
        return redirect('/');
    }
    // 기본 정보 입력한 경우
    if (response.data && response.data.profile) {
        return redirect('/question-list');
    }
    // 기본 정보 입력 페이지
    return redirect('/info-form');
}

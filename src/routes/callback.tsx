import { redirect } from 'react-router-dom';
import { api } from '@lib/api/client.ts';

export async function loader() {
    const response = await api.GET('/users/me');

    // 로그인 실패
    if (response.error) {
        throw new Response('', { statusText: '로그인 실패' });
    }
    if (response.data.profile) {
        return redirect('/question-list');
    }
    return redirect('/info-form');
}

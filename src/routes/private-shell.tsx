import { api } from '@lib/api/client';
import { Navigate, Outlet, redirect, useLoaderData, useRouteError } from 'react-router-dom';
import { useCommonStore } from '@/store/useCommonStore.tsx';
import { paths } from '@lib/api/api';

export async function privateShellLoader() {
    const userFetchResponse = await api.GET('/users/me');
    if (userFetchResponse.error) {
        return redirect('/login');
    }
    return userFetchResponse.data;
}

export function PrivateShellBoundary() {
    const error = useRouteError();
    const errorOccuredFromSession =
        typeof error === 'object' && error !== null && 'code' in error && error.code === 401;
    if (!errorOccuredFromSession) {
        // Just re throw an error to attach it to the errorPage element(root Error boundary)
        throw error;
    }
    return <Navigate to="/" replace />;
}

type PrivateShellProp =
    paths['/users/me']['get']['responses']['200']['content']['application/json'];

export function PrivateShell() {
    const data = useLoaderData() as PrivateShellProp;
    const { profile } = data;

    const setUserNickname = useCommonStore(state => state.setUserNickname);
    const userNickname = useCommonStore(state => state.userNickname);
    if (profile && !userNickname) {
        setUserNickname(profile.nickname);
    }

    return <Outlet />;
}

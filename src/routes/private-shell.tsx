import { api } from '@lib/api/client';
import { Navigate, redirect, useRouteError } from 'react-router-dom';

export async function privateShellLoader() {
    const userFetchResponse = await api.GET('/users/me');
    if (userFetchResponse.error) {
        return redirect('/');
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

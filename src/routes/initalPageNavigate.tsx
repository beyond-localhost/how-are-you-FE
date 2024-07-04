import { api } from '@lib/api/client';
import { Navigate, useLoaderData } from 'react-router-dom';

export async function initialPageNavigateLoader() {
    const userFetchResponse = await api.GET('/users/me');
    if (userFetchResponse.error) {
        return 'login';
    }
    if (userFetchResponse.data.profile === null) {
        return 'info-form';
    }
    return 'today-question';
}

function InitialPageNavigate() {
    const data = useLoaderData();
    if (typeof data !== 'string') {
        return <Navigate to="/login" />;
    }

    if (data === 'login') {
        return <Navigate to="/login" />;
    }

    if (data === 'info-form') {
        return <Navigate to="/info-form" />;
    }

    return <Navigate to="/today-question" />;
}

export default InitialPageNavigate;

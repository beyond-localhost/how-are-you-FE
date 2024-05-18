import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from '@routes/index.tsx';
import ErrorPage from '@routes/errorPage.tsx';
import Callback from '@routes/callback.tsx';
import InfoForm from '@routes/infoForm.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        errorElement: <ErrorPage />
    },
    {
        path: '/callback',
        element: <Callback />
    },
    {
        path: '/info-form',
        element: <InfoForm />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

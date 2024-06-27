import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';
import Index, { loader as indexLoader } from '@routes/index.tsx';
import ErrorPage from '@routes/errorPage.tsx';
import { loader as callbackLoader } from '@routes/callback.tsx';
import InfoForm, { loader as infoFormLoader } from '@routes/infoForm.tsx';
import Root from '@routes/root.tsx';
import QuestionList, { loader as questionListLoader } from '@routes/questionList.tsx';
import Question, { loader as questionLoader, action as questionAction } from '@routes/question.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route>
                <Route index loader={indexLoader} element={<Index />} />
                <Route path="callback" loader={callbackLoader} />
                <Route path="info-form" loader={infoFormLoader} element={<InfoForm />} />
                <Route
                    path="question-list"
                    loader={questionListLoader}
                    element={<QuestionList />}
                />
                <Route
                    path="question"
                    loader={questionLoader}
                    action={questionAction}
                    element={<Question />}
                />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

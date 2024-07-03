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
import TodayQuestion, { loader as questionLoader } from '@routes/todayQuestion.tsx';
import Question, { loader as QuestionLoader } from '@routes/question.tsx';
import { action as QuestionAction } from '@feature/question/QuestionInput.tsx';
import { PrivateShellBoundary, privateShellLoader } from '@routes/private-shell';
import HeaderLayout from '@routes/HeaderLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route index loader={indexLoader} element={<Index />} />
            <Route path="callback" loader={callbackLoader} />
            <Route
                loader={privateShellLoader}
                shouldRevalidate={() => false}
                errorElement={<PrivateShellBoundary />}
            >
                <Route path="info-form" loader={infoFormLoader} element={<InfoForm />} />

                <Route element={<HeaderLayout />}>
                    <Route>
                        <Route
                            path="question-list"
                            loader={questionListLoader}
                            element={<QuestionList />}
                        />
                        <Route
                            path="today-question"
                            loader={questionLoader}
                            element={<TodayQuestion />}
                        />
                        <Route
                            path="question/:questionId"
                            loader={QuestionLoader}
                            action={QuestionAction}
                            element={<Question />}
                        />
                    </Route>
                </Route>
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

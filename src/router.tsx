import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from '@routes/login.tsx';
import ErrorPage from '@routes/errorPage.tsx';
import { loader as callbackLoader } from '@routes/callback.tsx';
import InfoForm, { loader as infoFormLoader } from '@routes/infoForm.tsx';
import Root from '@routes/root.tsx';
import QuestionList, { loader as questionListLoader } from '@routes/questionList.tsx';
import TodayQuestion, { loader as questionLoader } from '@routes/todayQuestion.tsx';
import Question, { loader as QuestionLoader } from '@routes/question.tsx';
import { action as QuestionAction } from '@feature/question/QuestionInput.tsx';
import { PrivateShell, PrivateShellBoundary, privateShellLoader } from '@routes/private-shell';
import HeaderLayout from '@routes/HeaderLayout';
import InitialPageNavigate, { initialPageNavigateLoader } from '@routes/initalPageNavigate';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route
                index
                element={<InitialPageNavigate />}
                loader={initialPageNavigateLoader}
                shouldRevalidate={() => false}
            />
            <Route path="/login" element={<Login />} />
            <Route path="callback" loader={callbackLoader} />
            <Route
                loader={privateShellLoader}
                shouldRevalidate={() => false}
                errorElement={<PrivateShellBoundary />}
                element={<PrivateShell />}
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
                            path="question/:questionId/answers/:mode?"
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

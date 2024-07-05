import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    const errorMessage = isRouteErrorResponse(error) ? error.statusText : '';

    const handleRetry = () => {
        navigate(0);
    };

    const handleGoBack = () => {
        const referrer = document.referrer;
        const curUrl = location.origin;

        // 이전 사이트 방문 이력 있을 경우
        if (referrer && referrer.startsWith(curUrl)) {
            navigate(-1);
        }

        navigate('/');
    };

    const handleInquiry = () => {
        alert('hyunmyung.dev@gmail.com 로 문의 바랍니다.'); // todo
    };

    return (
        <>
            <h1>{errorMessage ? errorMessage : '문제가 발생했습니다.'}</h1>
            <p>잠시 후 다시 시도해주세요.</p>

            <div>
                <button onClick={handleRetry}>다시 시도</button>
                <button onClick={handleGoBack}>돌아가기</button>
                <button onClick={handleInquiry}>문의하기</button>
            </div>
        </>
    );
}

export default ErrorPage;

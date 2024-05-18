import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError(); // todo ?
    console.error(error);

    return (
        <>
            <p>Error page!</p>
        </>
    );
}

export default ErrorPage;

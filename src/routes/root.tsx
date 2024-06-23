import { Outlet, useLocation } from 'react-router-dom';
import { Container } from '@styles/Common.style.tsx';

function Root() {
    const location = useLocation();

    return (
        <Container>
            {!['/', '/info-form'].includes(location.pathname) && <h1>How are you?</h1>}

            <Outlet />
        </Container>
    );
}

export default Root;

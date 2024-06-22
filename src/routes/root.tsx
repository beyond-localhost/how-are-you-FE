import { Outlet, useLocation } from 'react-router-dom';
import { Container, Layout } from '@components/container/style.tsx';

function Root() {
    const location = useLocation();

    return (
        <Layout>
            <Container>
                {!['/', '/info-form'].includes(location.pathname) && <h1>How are you?</h1>}

                <Outlet />
            </Container>
        </Layout>
    );
}

export default Root;

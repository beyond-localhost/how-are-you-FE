import { Outlet } from 'react-router-dom';
import { Container } from '@styles/Common.style.tsx';

function Root() {
    return (
        <Container>
            <Outlet />
        </Container>
    );
}

export default Root;

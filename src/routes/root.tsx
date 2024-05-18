import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <div>
            <h1>How are you?</h1>

            <Outlet />
        </div>
    );
}

export default Root;

import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <div>
            <h3>How are you?</h3>

            <Outlet />
        </div>
    );
}

export default Root;

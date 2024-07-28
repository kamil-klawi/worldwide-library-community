import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

function Layout() {
    return (
        <>
            <Header />
            <main className="my-20">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;

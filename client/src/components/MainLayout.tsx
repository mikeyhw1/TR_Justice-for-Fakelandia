import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const MainLayout: React.FC = () => (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
);

export default MainLayout;

import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout: React.FC = () => (
    <>
        <header>
            <Header />
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

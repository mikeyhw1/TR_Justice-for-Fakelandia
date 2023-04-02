import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const MainLayout: React.FC = () => (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
    </>
);

export default MainLayout;

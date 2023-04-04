import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MisdemeanourContext from "../../hooks/useContextHooks";
import { useState } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";

const MainLayout: React.FC = () => {
    const [newMisdemeanour, setNewMisdemeanour] = useState<Misdemeanour[]>([]);
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <MisdemeanourContext.Provider value={{ newMisdemeanour, setNewMisdemeanour }}>
                    <Outlet />
                </MisdemeanourContext.Provider>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default MainLayout;

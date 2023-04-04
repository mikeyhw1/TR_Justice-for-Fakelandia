import { Routes, Route, Outlet, Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import Misdemeanours from "../pages/Misdemeanours/Misdemeanours";
import Confession from "../pages/Confession/Confession";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NotFound from "../pages/ErrorPage/NotFound";

const Router: React.FC = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/misdemeanours" element={<Misdemeanours />} />
            <Route path="/confession" element={<Confession />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);

export default Router;

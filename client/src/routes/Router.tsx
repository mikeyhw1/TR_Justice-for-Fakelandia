import { Routes, Route, Outlet, Link } from "react-router-dom";
import MainLayout from "../components/MainLayout";
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

/* <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="dashboard" element={<Dashboard />} />

    <Route path="*" element={<NoMatch />} />
</Route> */

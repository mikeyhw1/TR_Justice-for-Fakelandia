import { NavLink } from "react-router-dom";

const Nav: React.FC = () => (
    <nav>
        <ul className="navbar__ul">
            <li className="navbar__li">
                <NavLink className="navbar__navLink" to="/">
                    Home
                </NavLink>
            </li>
            <li className="navbar__li">
                <NavLink className="navbar__navLink" to="/misdemeanours">
                    Misdemeanours
                </NavLink>
            </li>
            <li className="navbar__li">
                <NavLink className="navbar__navLink" to="/confession">
                    Confess To Us
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;

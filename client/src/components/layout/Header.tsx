import Nav from "./Nav";

const Header: React.FC = () => (
    <div className="header__container">
        <div className="header__titleContainer">
            <h5 className="header__titleText">FAKELANDIA</h5>
            <h5 className="header__titleText">JUSTICE</h5>
            <h5 className="header__titleText">DEPARTMENT</h5>
        </div>
        <Nav />
    </div>
);

export default Header;

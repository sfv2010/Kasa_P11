import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logoKasa from "../../assets/logo.svg";

const Header = () => {
    return (
        <header className="headerContainer">
            <div className="headerBox">
                <Link to="/">
                    <img
                        src={logoKasa}
                        alt="Logo de Kasa"
                        className="headerLogo"
                    />
                </Link>

                <nav className="headerMenu">
                    <NavLink
                        to="/"
                        className={(nav) =>
                            nav.isActive ? "headerLinkActive" : "headerLink"
                        }>
                        Accueil
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={(nav) =>
                            nav.isActive ? "headerLinkActive" : "headerLink"
                        }>
                        A Propos
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;

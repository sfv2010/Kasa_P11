import "./Footer.css";
import footerLogo from "../../assets/footerLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footerBox">
            <Link to="/">
                <img
                    src={footerLogo}
                    alt="Logo de Kasa"
                    className="footerImg"
                />
            </Link>

            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;

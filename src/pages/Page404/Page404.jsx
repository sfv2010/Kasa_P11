import "./Page404.css";
import error from "../../assets/404.png";
import { Link } from "react-router-dom";
const Page404 = () => {
    return (
        <div className="errorContainer">
            <img src={error} alt="Erreur 404" className="errorImg" />
            <h1 className="errorH1">
                Oups! La page que vous demandez n'existe pas.
            </h1>
            <Link to="/">
                <p className="errorP">Retourner sur la page d’accueil</p>
            </Link>
        </div>
    );
};

export default Page404;

import "./Carrousel.css";
import arrowBack from "../../assets/arrowBack.svg";
import arrowForward from "../../assets/arrowForward.svg";

const Carrousel = () => {
    return (
        <div className="carrouselContainer">
            <img
                src=""
                alt="Photos of the accommodation"
                className="carrouselImg"
            />
            <img src={arrowBack} alt="back allow" className="arrowBack" />
            <img
                src={arrowForward}
                alt="forward allow"
                className="arrowForward"
            />
        </div>
    );
};

export default Carrousel;

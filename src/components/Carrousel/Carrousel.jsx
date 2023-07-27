import { useState } from "react";
import "./Carrousel.css";
import arrowBack from "../../assets/arrowBack.svg";
import arrowForward from "../../assets/arrowForward.svg";

const Carrousel = ({ pictures }) => {
    const [currentCarrousel, setCurrentCarrousel] = useState(0);
    const prevCarrousel = () => {
        setCurrentCarrousel((prev) =>
            prev === 0 ? pictures.length - 1 : prev - 1
        );
    };
    const nextCarrousel = () => {
        setCurrentCarrousel((prev) => (prev + 1) % pictures.length);
    };
    const currentNumber = currentCarrousel + 1;
    const totalPictures = pictures.length;
    const displayNumber =
        totalPictures > 1 ? `${currentNumber}/${totalPictures}` : "";
    const showDisplayAllow = totalPictures > 1;

    return (
        <div className="carrouselContainer">
            <img
                src={pictures[currentCarrousel]}
                alt="Photos of the accommodation"
                className="carrouselImg"
            />
            {showDisplayAllow && (
                <>
                    <img
                        src={arrowBack}
                        alt="back allow"
                        className="arrowBack"
                        onClick={prevCarrousel}
                    />
                    <img
                        src={arrowForward}
                        alt="forward allow"
                        className="arrowForward"
                        onClick={nextCarrousel}
                    />
                </>
            )}

            {displayNumber && (
                <div className="carrouselNumber">{displayNumber}</div>
            )}
        </div>
    );
};

export default Carrousel;

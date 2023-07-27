import "./Collapse.css";
import { useState, useRef } from "react";

const Collapse = ({
    id,
    title,
    description,
    summaryBar,
    summaryTitle,
    detailsDesc,
}) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const collapseRef = useRef(null);
    const handleToggleAnimation = () => {
        setIsAnimated(false); // reset the animation
        void collapseRef.current.offsetWidth; // for the animation to restart
        setIsAnimated(true); //Restart animation
    };
    return (
        <details className="collapseContainer">
            <summary className={summaryBar} onClick={handleToggleAnimation}>
                <h2 className={summaryTitle}>{title}</h2>
            </summary>
            <div
                id={`collapse-${id}`}
                className={`collapse ${isAnimated ? "animated" : ""}`}
                ref={collapseRef}>
                <p className={detailsDesc}>{description}</p>
            </div>
        </details>
    );
};

export default Collapse;

import "./Collapse.css";
import { useState } from "react";

const Collapse = ({ id, title, description }) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const handleToggleAnimation = () => {
        setIsAnimated(false); // reset the animation
        void document.getElementById(`collapse-${id}`).offsetWidth; // for the animation to restart
        setIsAnimated(true); //Restart animation
    };
    return (
        <details className="collapseContainer">
            <summary className="collapseBar" onClick={handleToggleAnimation}>
                <h2 className="collapseH2">{title}</h2>
            </summary>
            <div
                id={`collapse-${id}`}
                className={`collapse ${isAnimated ? "animated" : ""}`}>
                <h3 className="collapseH3">{description}</h3>
            </div>
        </details>
    );
};

export default Collapse;

// const Collapse = ({ title, description }) => {
//     return (
//         <div className="collapseContainer">
//             <div className="collapseBar">
//                 <h2 className="collapseH2">{title}</h2>
//             </div>
//             <div className="collapse">
//                 <h3 className="collapseH3">{description}</h3>
//             </div>
//         </div>
//     );
// };

import "./Card.css";
const Card = ({ title, cover }) => {
    return (
        <div className="cardContainer">
            <div className="card">
                <img src={cover} alt={title} className="cardImg" />
                <h2 className="cardH2">{title}</h2>
            </div>
        </div>
    );
};
export default Card;

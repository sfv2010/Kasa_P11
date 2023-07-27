import "./StarRating.css";
import filledStar from "../../assets/starRouge.svg";
import emptyStar from "../../assets/starGray.svg";

const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Number(rating);
    const emptyStars = totalStars - filledStars;
    return (
        <div>
            {[...Array(filledStars)].map((_, index) => (
                <span key={index}>
                    <img
                        src={filledStar}
                        alt="star rating"
                        className="starImg"
                    />
                </span>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index}>
                    <img src={emptyStar} alt="empty star" className="starImg" />
                </span>
            ))}
        </div>
    );
};

export default StarRating;

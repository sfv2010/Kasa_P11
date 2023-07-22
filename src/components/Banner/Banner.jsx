import "./Banner.css";
const Banner = ({ img, children }) => {
    return (
        <div className="banner">
            <div className="bannerContainer">
                <img src={img} alt="Bannière" className="bannerImg" />
                <h1 className="bannerH1"> {children} </h1>
            </div>
        </div>
    );
};

export default Banner;

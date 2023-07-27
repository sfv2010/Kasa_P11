import "./About.css";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "../../assets/bannerAbout.png";
import Collapse from "../../components/Collapse/Collapse";
import { aboutDatas } from "../../datas/aboutDatas.js";
const About = () => {
    return (
        <main>
            <Banner img={bannerAbout} />
            {aboutDatas.map((data, index) => (
                <div
                    className={`aboutCollapse ${
                        index === 0 ? "firstCollapse" : ""
                    }`}
                    key={data.id}>
                    <Collapse
                        id={data.id}
                        title={data.title}
                        description={data.description}
                        summaryTitle="collapseH2"
                        detailsDesc="collapseP"
                    />
                </div>
            ))}
        </main>
    );
};

export default About;

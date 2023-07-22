import "./About.css";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "../../assets/bannerAbout.png";
import Collapse from "../../components/Collapse/Collapse";
import { aboutDatas } from "../../datas/aboutDatas.js";
const About = () => {
    return (
        <main>
            <Banner img={bannerAbout} />
            {aboutDatas.map((data) => (
                <Collapse
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    description={data.description}
                />
            ))}
        </main>
    );
};

export default About;

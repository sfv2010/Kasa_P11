import datas from "../../datas/housingAdsList.json";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import "./Accommodation.css";

const Accommodation = () => {
    const { id } = useParams();

    const accomodation = datas.find((object) => object.id === id);
    if (!accomodation) {
        return;
    }
    const { title, location, host, tags, description, equipments } =
        accomodation;

    return (
        <main className="accomContainer">
            <Carrousel />

            <section className="accomBox">
                <div
                    className="accomGrid
				">
                    <h1 className="accomH1">{title}</h1>
                    <h2 className="accomH2">{location}</h2>

                    <div className="accomProfile">
                        <h3 className="accomCenter">{host.name}</h3>
                    </div>
                    <div className="accomImgContainer">
                        <img
                            src={host.picture}
                            alt={host.name}
                            className="accomImg "
                        />
                    </div>
                </div>
                <div className="accomTagContainer">
                    <div className="accomTagbox"></div>
                    {tags.map((tag) => (
                        <span className="accomTag" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div>☆☆</div>
                <div className="accomCollapse">
                    <div className="accomCollapseBox">
                        <Collapse
                            key={id}
                            title="Description"
                            description={description}
                        />
                    </div>

                    <div className="accomCollapseBox">
                        <Collapse
                            key={id}
                            title="Équipements"
                            description={equipments}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Accommodation;

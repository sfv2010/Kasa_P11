import datas from "../../datas/housingAdsList.json";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import "./Accommodation.css";
import Tag from "../../components/Tag/Tag";
import Page404 from "../Page404/Page404";
import StarRating from "../../components/StarRating/ StarRating";

const Accommodation = () => {
    const { id } = useParams();
    const accomDetails = datas.find((data) => data.id === id);
    if (!accomDetails) {
        return <Page404 />;
    }
    const {
        pictures,
        title,
        location,
        host,
        tags,
        rating,
        description,
        equipments,
    } = accomDetails;
    const equipmentString = equipments.join("\n");

    return (
        <main className="accomContainer">
            <Carrousel pictures={pictures} />

            <section className="accomBox">
                <div className="accomFlex">
                    <div className="accomTitleContainer">
                        <h1 className="accomH1">{title}</h1>
                        <h2 className="accomH2">{location}</h2>

                        <Tag tags={tags} />
                    </div>
                    <div className="accomProfileStar">
                        <div className="accomProfile">
                            <h3 className="accomName">{host.name}</h3>
                            <img
                                src={host.picture}
                                alt={host.name}
                                className="accomImg"
                            />
                        </div>
                        <div className="accomStar">
                            <StarRating rating={rating} />
                        </div>
                    </div>
                </div>
                <div className="accomCollapse">
                    <div className="accomCollapseBox">
                        <Collapse
                            key={id}
                            title="Description"
                            description={description}
                            summaryBar="accomBar"
                            summaryTitle="accomTitle"
                            detailsDesc="accomDesc"
                        />
                    </div>

                    <div className="accomCollapseBox">
                        <Collapse
                            key={id}
                            title="Équipements"
                            description={equipmentString}
                            summaryBar="accomBar"
                            summaryTitle="accomTitle"
                            detailsDesc="accomDesc"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Accommodation;

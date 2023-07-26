import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import datas from "../../datas/housingAdsList.json";
import banner from "../../assets/banner.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Banner img={banner}>Chez vous, partout et ailleurs</Banner>
            <main className="mainContainer">
                <div className="mainBox">
                    {datas.map((data) => (
                        <Link key={data.id} to={`/accommodation/${data.id}`}>
                            <Card
                                key={data.id}
                                title={data.title}
                                cover={data.cover}
                            />
                        </Link>
                    ))}
                </div>
            </main>
        </>
    );
};
export default Home;

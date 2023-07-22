import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import datas from "../../datas/housingAdsList.json";
import banner from "../../assets/banner.png";

const Home = () => {
    return (
        <>
            <Banner img={banner}>Chez vous, partout et ailleurs</Banner>
            <main className="mainContainer">
                <div className="mainBox">
                    {datas.map((data) => (
                        <Card
                            data={data}
                            key={data.id}
                            title={data.title}
                            cover={data.cover}
                        />
                    ))}
                </div>
            </main>
        </>
    );
};
export default Home;

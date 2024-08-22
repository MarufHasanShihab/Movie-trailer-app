import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../Components/TitleCard/TitleCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="banner_img" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="caption_img" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a youing man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn ">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCard />
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"Blockbuster Movie"} />
        <TitleCard title={"Only On Netflix"}  />
        <TitleCard title={"Upcomming"}  />
        <TitleCard title={"Top Pic for You"}  />
      </div>
    </div>
  );
};

export default Home;

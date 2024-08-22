import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data";
import { useRef, useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types"

const TitleCard = ({title, category}) => {
    const [apiData, setApiData] = useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2VlYzk3ZWY5MTA5MWI5YmEzNTFmMTJjMzYzM2NjNCIsIm5iZiI6MTcyNDMyNTY0Mi41MjUwMDgsInN1YiI6IjY2YmNiZGQwMzkwNGNjMjJhZDIxNjA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mO8bojdq94-RqOeIZNt1NUdECAz5M1wgwqBwPuYsf9A'
        }
      };


  const cardsRef = useRef();
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData?.map((card, index) => (
          <div key={index} className="card">
            <img className={title?'':'sm_img'} src={`https://image.tmdb.org/t/p/w500`+card.poster_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

TitleCard.propTypes ={
    title: PropTypes.string,
    category: PropTypes.string
}


export default TitleCard;

import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data";
import { useRef } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types"

const TitleCard = ({title, category}) => {
  const cardsRef = useRef();
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt="" />
            <p>{card.name}</p>
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

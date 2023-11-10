import { useEffect, useState } from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const [checkMatchFront,setCheckMatchFront] = useState("front");
  const [checkMatchBack,setCheckMatchBack] = useState("back");
  useEffect(()=>{
    if (card.match){
      setTimeout(() => {
        setCheckMatchFront("front")
        setCheckMatchBack("back")
        console.log("fuck you")
      }, 500);
      setTimeout(()=>{
        setCheckMatchFront("front-match")
        setCheckMatchBack("back-match")
      },900)
    }
  },[card.match])
  const handleClick = () => {
    if(!disabled  ) handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : 'non-flipped'}>
        <img className={checkMatchFront} src={card.src} alt="card front" />
        <img
          className={checkMatchBack}
          src="./img/cover-2.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;

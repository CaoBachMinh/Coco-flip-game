import { useEffect, useState } from "react";
import SingleCard from "../../components/SingleCard";
import { useNavigate } from "react-router";
import "./Level-12.css";

const cardImages = [
  { src: "./img/Koala-1.jpg", match: false },
  { src: "./img/bear-1.png", match: false },
  { src: "./img/elephant-1.png", match: false },
  { src: "./img/horse-1.png", match: false },
  { src: "./img/rabbit-1.png", match: false },
  { src: "./img/kangaroo-1.png", match: false },
];

const playSounds = () => {
  // Create a new Audio instance for the first sound
  const successSound = new Audio("/sound/short-success-sound.mp3");

  // Play the first sound
  successSound.play();

  // Use setTimeout to play the second sound after 1 second
  setTimeout(() => {
    const congratsSound = new Audio("/sound/be-gioi-qua.mp3");
    congratsSound.play();
  }, 200);
};

function Level12() {
  const [Compliment,setCompliment] = useState("Trò Chơi Lật Thẻ");
  const [cards, setCards] = useState([]);
  const [turns, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentPlay,setCurrentPlay] = useState(false);
  // shuffling the cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCurrentPlay(false);
    setCards(shuffledCards);
    setTurn(0);
  };

  /// checking is all cards is back-side
  useEffect(()=>{
    if(cards.every((card) => card.match)){
      setCurrentPlay(true)
    }
  },[cards])

  // taking choices
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare cards
  useEffect(() => {
    // MY PATCH
    if (choiceOne?.id === choiceTwo?.id) return;

    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        // Play sounds
        playSounds();
        setCompliment("Bé Giỏi Quá");
        setTimeout(() => {
          setCompliment("Trò Chơi Lật Thẻ")
        }, 1000);


        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, match: true } : card
          )
        );
        reset();
      } else {
        setTimeout(reset, 1000);
      }
      setTurn((prevState) => prevState + 1);
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turns
  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  // starting the game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  // check for game completion
  useEffect(() => {
    if (cards.every((card) => card.match)) {
      setShowCelebration(true);
      // Hide celebration after animation duration (1s in this case)
      setTimeout(() => {
        setShowCelebration(false);
      }, 1000);
    }
  }, [cards]);

  const navigate = useNavigate();
  function nextClick(){
    navigate('/',{replace:true});
  }

  return (
    <div className="App">
      <h1 className="Current-level">Level 4</h1>
      <h1 className="Head">{Compliment}</h1>
      <button onClick={shuffleCards}>Bắt Đầu</button>
      <button className={currentPlay ? 'show':'hide'} onClick = {nextClick} >Chơi Lại</button>
      <div className="card-grid">
        {cards.map((card) => {
          return (
            <SingleCard
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.match}
              disabled={disabled}
              key={card.id}
            />
          );
        })}
      </div>
      <p className="Turn">turns: {turns}</p>
      {showCelebration && (
        <div className="celebration">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="firework"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                animationDuration: `${Math.random() * 0.5 + 0.5}s`,
                animationDelay: `-${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Level12;

import React, { useState, useEffect } from "react";
import "./App.css";

export function Timer({setShowPopup}) {
  const [timeRemaining, setTimeRemaining] = useState(3600);

  const formattedTimeRemaining = `${Math.floor(timeRemaining / 60)
    .toString()
    .padStart(2, "0")}:${(timeRemaining % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          setShowPopup(true); // Show the popup when time reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup effect
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="timer">
      <strong>Thời gian còn lại: </strong> {formattedTimeRemaining}
      <p>Khuyến cáo chơi game 30 phút/ngày</p>
    </div>



  );
}

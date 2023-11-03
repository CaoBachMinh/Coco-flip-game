import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export function Timer(){
    const [timeRemaining, setTimeRemaining] = useState(30 * 60);
    const [intervalId, setIntervalId] = useState(null);

    const formattedTimeRemaining = `${Math.floor(timeRemaining / 60)
    .toString()
    .padStart(2, "0")}:${(timeRemaining % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    const id = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setIntervalId(id);

    // Cleanup effect
    return () => {
      clearInterval(id);
    };
  }, []);
  useEffect(() => {
    if (timeRemaining === 0) {
      window.alert(
        "Bạn đã chơi quá 30 phút! Hãy nghỉ ngơi và tránh chơi quá lâu."
      );
    }
  }, [timeRemaining]);
    return(
        <div className="timer">
        <strong>Thời gian còn lại: </strong> {formattedTimeRemaining}
        <p>Khuyến cáo chơi game 30 phút/ngày</p>
      </div>
    );
}
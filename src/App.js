import React, { useRef, useState, useEffect } from 'react';
import Level6 from "./levels/Level 6/Level-6";
import Level8 from "./levels/Level 8/Level-8";
import Level10 from "./levels/Level 10/Level-10";
import Level12 from "./levels/Level 12/Level-12";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

export default function App(){
    const [isPlay, setIsPlay] = useState(false);
    const [time, setTime] = useState(30 * 60);
    const audioRef = useRef();
    const bgAudioRef = useRef();

    function playGuide() {
        audioRef.current.volume = 1.0;
        audioRef.current.play();
        setIsPlay(true);
    }

    function startGame() {
        bgAudioRef.current.volume = 1.0;
        bgAudioRef.current.play();
        setIsPlay(true);
    }

    useEffect(() => {
        if(isPlay) {
            const timer = setInterval(() => {
                setTime(prev => prev > 0 ? prev - 1 : 0);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [isPlay]);

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener("ended", () => setIsPlay(false));
        return () => audio.removeEventListener("ended", () => setIsPlay(false));
    }, []);

    const displayTime = `${Math.floor(time/60)}:${time%60 < 10 ? '0' + time%60 : time%60}`;

    useEffect(() => {
        if (time === 0) {
            window.alert("Bạn đã chơi quá 30 phút! Hãy nghỉ ngơi và tránh chơi quá lâu.");
            bgAudioRef.current.pause(); 
            setIsPlay(false);
        }
    }, [time]);
    
    return (
        <div>
            <audio
                ref={audioRef}
                src='../sound/guide.mp3'
            ></audio>
            <audio
                ref={bgAudioRef}
                src='../sound/background-music.mp3'
                loop
            ></audio>

            <Router>
                <div className="Start-button">
                    {isPlay && <p className="black-text">Đang phát âm thanh..</p>}
                    <button onClick={playGuide}>Nghe hướng dẫn trò chơi</button>
                    <Link to='/level6'>
                        <button onClick={startGame} className="start-button">Bắt đầu chơi</button>
                    </Link>
                    <div>
                    <p className="black-text">{displayTime}</p>
                        <p className="black-text">Khuyến cáo chơi game 30 phút/ ngày</p>
                    </div>
                </div>
                <Routes>
                    <Route path='/level6' element={<Level6 />} />
                    <Route path='/level8' element={<Level8 />} />
                    <Route path='/level10' element={<Level10 />} />
                    <Route path='/level12' element={<Level12 />} />
                </Routes>
            </Router>
        </div>
    )
}

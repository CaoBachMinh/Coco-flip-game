import React, { useRef, useState, useEffect } from 'react';
import Level6 from "./levels/Level 6/Level-6";
import Level8 from "./levels/Level 8/Level-8";
import Level10 from "./levels/Level 10/Level-10";
import { Timer } from './TImer';
import Level12 from "./levels/Level 12/Level-12";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
// import "./app.scss";
export default function App() {
    const [isPlayingGuide, setIsPlayingGuide] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const guideAudioRef = useRef(null);
    const gameAudioRef = useRef(null);
    useEffect(() => {
        if (hasStarted) {
            gameAudioRef.current.play();
        }
    }, [hasStarted]);

    const startGame = () => {
        setIsPlayingGuide(true);
        guideAudioRef.current.volume = 1.0;
        guideAudioRef.current.play();
        guideAudioRef.current.onended = () => {
            setHasStarted(true);
            setIsPlayingGuide(false);
        };
    };

    return (
        <div className='App'>
            <audio
                ref={guideAudioRef}
                src='../sound/guide.mp3'
            ></audio>
            <audio
                ref={gameAudioRef}
                src='../sound/background-music.mp3'
                loop
            ></audio>
            <Router>
                {!hasStarted ? (
                    <div className="start-container">
                        <button className="start-button" onClick={startGame}>
                            Nghe hướng dẫn chơi
                        </button>
                        
                        {isPlayingGuide && <p>Đang phát âm thanh ...</p>}
                    </div>
                ) : (
                    <>
                        <div className="Timer">
                            <Timer />
                        </div>
                        <Routes>
                            <Route path='/' element={<Level6 />} />
                            <Route path='/level8' element={<Level8 />} />
                            <Route path='/level10' element={<Level10 />} />
                            <Route path='/level12' element={<Level12 />} />
                        </Routes></>
                )}


            </Router>
        </div>
    )
}

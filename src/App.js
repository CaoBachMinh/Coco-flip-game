import Level6 from "./levels/Level 6/Level-6";
import Level8 from "./levels/Level 8/Level-8";
import Level10 from "./levels/Level 10/Level-10";
import Level12 from "./levels/Level 12/Level-12";
import {useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";


 export default function App(){
    const [isPlay,setIsPlay] = useState(false);
    const audioRef = useRef();
    function Click(){
        audioRef.current.play();
        setIsPlay(true)
    }

    return(
        <div>
        
        <audio
             ref={audioRef}
             src='../sound/background-music.mp3'
             loop
        ></audio>
        <Router>
            <div className="Start-button">
                <Link to='/level6'>
                    <button className={isPlay? "start-button-off" : "start-button-on"} onClick={Click}>
                        Start
                    </button>
                </Link>
            </div>
            <Routes>
                <Route path = '/level6' element={<Level6/>}/>
                <Route path = '/level8' element={<Level8/>}/>
                <Route path = '/level10' element={<Level10/>}/>
                <Route path = '/level12' element={<Level12/>}/>
            </Routes>
        </Router>
        </div>
    )
}
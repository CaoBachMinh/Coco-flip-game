import {useRef } from 'react';
import { useNavigate } from 'react-router';


export default function Start(){
    const navigate = useNavigate();
    const audioRef = useRef();
    function Click(){
        audioRef.current.play();

        
    }
    
    return(
        <div className='Music'>
            <button onClick={Click}>
                Start
            </button>
            <audio
             ref={audioRef}
             src='../sound/background-music.mp3'
             loop
            ></audio>
            
        </div>
    )
}
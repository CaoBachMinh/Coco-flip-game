import ReactAudioPlayer from 'react-audio-player';

export default function Player(){
    return(
        <div className='Music'>
            <ReactAudioPlayer
            src='../sound/background-music.mp3'
            autoPlay
            controls
            loop
            />
            
        </div>
    )
}
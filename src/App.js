import Level6 from "./levels/Level 6/Level-6";
import Level8 from "./levels/Level 8/Level-8";
import Level10 from "./levels/Level 10/Level-10";
import Level12 from "./levels/Level 12/Level-12";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";


function App(){
    return(
        <div>
        <audio id="audio" src="../sound/background-music.mp3" type="audio/mp3" loop autoPlay/>
        <Router>
            <Routes>
                <Route path = '/' element={<Level6/>}/>
                <Route path = '/level8' element={<Level8/>}/>
                <Route path = '/level10' element={<Level10/>}/>
                <Route path = '/level12' element={<Level12/>}/>
            </Routes>
        </Router>
        </div>
    )
}

export default App;
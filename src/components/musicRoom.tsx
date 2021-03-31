import * as misc from "./miscFunctions/musicRoomFunctions.js";
import './styles/MusicRoom.css';

function MusicRoom() {
    return (<div className="musicRoom">
        <div className="warmUpVideoFrame">
            <h1>✨ First things first ✨</h1>
            <iframe className="warmUpVideo" src="https://www.youtube-nocookie.com/embed/e28xk4YnUAA?start=142" allow="encrypted-media;"></iframe>
            <i className="fas fa-chevron-down"></i>
        </div>
        <button className="backHomeButton" type="button" onClick={() => window.location.reload()}>Go back</button>
        <div id="abc123">
            {misc.test()}

            <button type="button" onClick={() => startWorker()}>Start worker</button>
        </div>
    </div>)
};

//  HACKY WEB WORKER CODE

function startWorker() {
    const metronomeWorker = new Worker("../../public/workers/metronome.js");
    metronomeWorker.addEventListener("message", (event) => {
        alert(event.data)
        metronomeWorker.terminate()
    });
    metronomeWorker.postMessage("xd")
};

//  HACKY WEB WORKER CODE

export default MusicRoom;
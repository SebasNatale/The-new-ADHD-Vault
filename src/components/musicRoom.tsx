import './styles/MusicRoom.css';
import MainMenu from "./mainMenu";

function MusicRoom() {
    return (
        <div id="musicRoom">
            <div className="warmUpVideoFade">
                <h1>First things first</h1>
                <iframe className="warmUpVideo" src="https://www.youtube-nocookie.com/embed/e28xk4YnUAA?start=142" allow="encrypted-media;"></iframe>
                <i className="fas fa-chevron-down"></i>
            </div>
            <div id="warmUpInterface">
                <button type="button">69420</button>
            </div>
        </div>
    )
};

export default MusicRoom;
import './styles/MusicRoom.css';

function MusicRoom() {
    return (<div className="musicRoom">
        <div className="warmUpVideoFrame">
            <h1>✨ First things first ✨</h1>
            <iframe className="warmUpVideo" src="https://www.youtube-nocookie.com/embed/e28xk4YnUAA?start=142" allow="encrypted-media;"></iframe>
            <i className="fas fa-chevron-down"></i>
        </div>
        <button className="backHomeButton" type="button" onClick={() => window.location.reload()}>Go back</button>
        <div id="navBar">
            <h1>TEST_TEST_TEST_TEST_TEST</h1>
        </div>
    </div>)
};

export default MusicRoom;
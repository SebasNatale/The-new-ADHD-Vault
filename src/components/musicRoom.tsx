import handleGoBackClick from './BackHomeButon';
import './styles/MusicRoom.css';

function MusicRoom() {
    return <>
        <div id="musicRoom">

            <div className="ESTE DIV NO SIRVE DE NI MIERDA">
                <div className="warmUpVideoFade">
                    <h1>First things first</h1>
                    <iframe className="warmUpVideo" src="https://www.youtube-nocookie.com/embed/e28xk4YnUAA?start=142" allow="encrypted-media;"></iframe>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>

        </div>
        <div id="warmUpInterface">
            <button className="backHomeButton" type="button" onClick={handleGoBackClick}>Test123</button>
        </div>
    </>
};

export default MusicRoom;
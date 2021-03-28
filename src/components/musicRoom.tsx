import MainMenu from "../components/MainMenu";
import ReactDOM from 'react-dom';
import './styles/MusicRoom.css';

const handleGoBackClick = () => {
    function handleBgResize() {
        const xd: any = document.getElementById("bg_root");
        console.log(xd)
        console.log(xd)
        console.log(xd)
        xd.style.width = "100%"
        xd.style.height = "100%"
    }
    ReactDOM.render(
        <MainMenu musicRoomBgResize={handleBgResize}/>,
        document.getElementById('root')
    )
};

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
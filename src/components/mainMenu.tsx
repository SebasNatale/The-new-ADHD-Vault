import MusicRoom from "./musicRoom";

import mblBanner from "../images/MOBILEheader_bannerWHITE.png";
import dskBanner from "../images/header_bannerWHITE.png";
import './styles/MainMenu.css';

//  TODO: averiguar como putas hacer esto
const bgWrap = document.getElementById("bg_wrap")!;

interface Props {
    screenSelected: (screen: Object | null) => void;
};

function MainMenu(props: Props) {
    return (
        <div id="landing">
            <img className="dskBanner" src={dskBanner}></img>
            <img className="mblBanner" src={mblBanner}></img>
            <h1 className="bannerTxt">What do you wanna do?</h1>
            <div className="btnContainer">
                <button className="buttons" type="button" onClick={() => props.screenSelected(null)}>Dev shit</button>
                <button 
                    className="buttons" 
                    type="button" 
                    onClick={() => {

                        bgWrap.style.width = "100%"
                        
                        props.screenSelected(<MusicRoom/>)
                    }}
                    >Music shit
                </button>
                <button className="buttons" type="button" onClick={() => props.screenSelected(null)}>No shit :c</button>
            </div>
        </div>
    )
};

export default MainMenu;
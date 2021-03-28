import ReactDOM from 'react-dom';
import MainMenu from './MainMenu';

const handleGoBackClick = () => {
    // function handleBgResize() {
    //     const xd: any = document.getElementById("bg_root");
    //     console.log(xd)
    //     console.log(xd)
    //     console.log(xd)
    //     xd.style.width = "75%"
    //     xd.style.height = "75%"
    // }
    ReactDOM.render(
        <MainMenu/>,
        document.getElementById('bg_root')
    )
};

export default handleGoBackClick;
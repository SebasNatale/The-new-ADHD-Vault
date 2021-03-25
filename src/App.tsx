import MainMenu from "./components/mainMenu";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [currentScreen, setCurrentScreen] = useState<Object | null>(null);

  useEffect(() => {
    setCurrentScreen(<MainMenu screenSelected={handleScreenChange}/>)
  }, []);

  const handleScreenChange = (screen: Object | null) => {
    setCurrentScreen(screen)
  };
  
  return (
    <div id="bg_wrap">
      <div id="bg_root">
        {currentScreen}
      </div>
    </div>
  );
}

export default App;
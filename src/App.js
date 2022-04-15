import "./App.css";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
import React from "react";

function App() {

  const [darkMode, setDarkMode] = React.useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  return (
    <>
      <Header
       darkMode={darkMode} 
       toggleDarkMode={toggleDarkMode}
      ></Header>
      <Meme
        darkMode={darkMode}></Meme>
    </>
  );
}

export default App;

import React from 'react'
import "../style.css"

function Header(props) {
  return (

    <>
    <header className= {props.darkMode? "dark":""}>
        <img className='header-image' src="./images/trollface_PNG48.png" alt="" />
        <h2 className='header-title'>Meme Generator</h2>
        <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        <h4 className='header-project'>React Project</h4>
    </header>
    </>
   
  )
}

export default Header

import React from "react";
import "../style.css";
// import "../memesData";
// import memesData from "../memesData";

function Meme(props) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // let url

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(()=>{

    fetch("https://api.imgflip.com/get_memes")
    .then(res=> res.json())
    .then(data => setAllMemeImages(data.data.memes))
  }, [])

  function getMemeImage() {
  
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    // url = memesArray[randomNumber].url
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event){
    
    const {name, value} = event.target
    setMeme (prevMeme => ({

      ...prevMeme ,
      [name] :value
    }))

  }

  return (
    <>
      <div id="main-section" className={props.darkMode ? "dark" : ""}>
        <div action="" className="form">
          <input
            type="text"
            placeholder="Top Text"
            className="form-input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Bottom Text"
            className="form-input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />

          <button className="form-button" onClick={getMemeImage}>
            Get a new meme Image 🖼
          </button>
        </div>

        {/* <img src={meme.randomImage} alt="" className='memeImage'/> */}
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" alt="memeImage" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </>
  );
}

export default Meme;

import { React, useState } from "react";
import { musicdata } from "./musicdata.js";
import "./styles.css";

var NewMusicData = Object.keys(musicdata);
// console.log(musicdata);

export default function App() {
  const [selectMusic, setSelectMusic] = useState("Kpop");

  function onClickHandler(music) {
    setSelectMusic(music);
    // console.log("clicked");
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="heading">My Playlist</h1>
        <h3 className="info">
          Here is my amazing playlist, do checkout by clicking on genres
        </h3>

        {NewMusicData.map(function (music) {
          return (
            <button
              onClick={() => onClickHandler(music)}
              className="buttons"
              key={music}
            >
              {music}
            </button>
          );
        })}
      </div>

      <>
        {musicdata[selectMusic].map((music, index) => {
          return (
            <div key={index}>
              <div className="main-box">
                <img src={music.img} alt=" " className="image"></img>
                <div className="box">
                  <h2 className="title">{music.music} </h2>
                  <h3 className="second-title"> Singer : {music.artist}</h3>
                  <div className="container"> Written by : {music.writer}</div>
                  <div className="about">Album : {music.album}</div>

                  <span className="rating"> Rating : {music.rating} </span>
                  <br />
                  <a href={music.link} target="blank">
                    <button className="music-button"> Listen Now </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
}

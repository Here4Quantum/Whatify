import React from "react";


function SongButton({title, img, by, genre}) {
  return (
    <button className="song-button">
      <div className="song">
        <h6 className="song-title">{title}</h6>
        <img src={img} alt="albumCover" className="centre" />
        <p className="song-desc">By : {by}</p>
        <p className="song-desc">Genre : {genre}</p>
      </div>
    </button>
  );
}


export default SongButton
import React from "react";
import Book from "../images/book.jpg";

function SongGallery() {
  return (
    //<!--Today's Listening-->
    //<!--will need to use rows and columns for multiple songs-->
    <div className="column middle">
      <h1 className="todaylistening-title">Whatify listened to this today!</h1>
      <div className="todaylistening">
        <button className="song-button">
          <div className="song">
            <p className="song-title">If I was an algorithm</p>
            <img src={Book} alt="albumCover" className="centre" />
            <p className="song-desc">By: Nerds w/ words</p>
            <p className="song-desc">Genre: rap</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SongGallery;

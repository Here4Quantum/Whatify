import React from "react";
import Playlist from './playlist'
import SongGallery from "./SongGallery";
import Questions from "./questions";


function Content() {
    

    
    return(
        <div className="row">
            <Playlist /> 
            <SongGallery />
            <Questions />
        </div>
    
    )
}

export default Content
import React, { useState , useEffect} from "react";
import { music } from "../musicData";
import "./Song.css"

export const Song = ({currentSong})=>{
  //  console.log(currentSong.audio);
    
    return(
        <div className="song-container">
             <img src={currentSong.cover} alt="music" className="cover"/>
            <h2 className="titlesong">{currentSong.name}</h2>
            <h3 className="artistsong">{currentSong.artist}</h3>  
        </div>
    )
}
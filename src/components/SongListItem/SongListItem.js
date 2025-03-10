import React, { useState , useEffect} from "react";
//import { music } from "../musicData";
import "./SongListItem.css"

export const SongListItem = ({song , setCurrentSong , songs , setSongs})=>{

    const selectSongHandler = ()=>{
         const selectedSong = songs.filter((item)=> item.id === song.id);
         setCurrentSong(selectedSong[0])

         const newSongs = songs.map((item)=>{
            if(item.id == song.id){
                return{
                    ...item,
                    active:true,
                }
            }else{
                return{
                    ...item,
                    active:false,
                }
            }
         })
         setSongs(newSongs)
    }
    
    
    
    return(
        <div onClick={selectSongHandler} className={`song-item ${song.active ? `active` : ''}`} >
            <img src={song.cover} alt="music" className="cover-mini"/>
           <div className="song-discripton">
           <h3 >{song.name}</h3>
           <h4 >{song.artist}</h4>  
           <hr/>
           </div>
           
        </div>
    )
}
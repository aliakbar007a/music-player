import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import './ToggleList.css'


export const ToggleList = ({showeListSong , setShoweListSong})=>{
    const ListSongHandler = ()=>{
        setShoweListSong(!showeListSong)
    }
    return(
        <nav className="nav-list">
            <h1>Waves</h1>
            <button onClick={ListSongHandler}>Music List
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}
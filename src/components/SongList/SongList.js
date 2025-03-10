import './SongList.css'
import {SongListItem} from '../SongListItem/SongListItem'
import React from 'react'
export const SongList = ({songs , setCurrentSong , setSongs , showeListSong})=>{
 
    
    return(
        <div className={`song-list ${showeListSong? `` : 'display-none'}`}>
            <h2> list of songs</h2>
            <div className='songs-list-item'> 
                {
                    songs && songs.map((song) =>{
                      return(
                        <SongListItem key={song.id} song={song} setCurrentSong={setCurrentSong}  songs={songs} setSongs={setSongs}/>
                      )
                    })
                }
            </div>
        </div>
    )
}
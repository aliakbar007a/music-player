import React , {useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay , faPause } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import "./Player.css"
export const Player = ({currentSong , isPlaying, setIsPlaying , songs , setCurrentSong , setSongs} )=>{
    const audioRef = useRef(null);
    const [lengthSong , setLengthSong] = useState(0);
    const [songInfo , setSongInfo] = useState({
        currentTime:0 ,
        duration:0 ,
    })

    useEffect(()=>{
        
        
        const newSongs = songs.map((item)=>{
            if(item.id == currentSong.id){
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
    },[currentSong])

    const playSong = ()=>{
        
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying); 
        }

    }
    

    const skipSong = (dir)=>{
        
        const currentIndex = songs.findIndex((item)=> item.id == currentSong.id);
        console.log(currentIndex);

        if(dir == 'next'){
           if(currentIndex === songs.length - 1){
              setCurrentSong(songs[0])
           }else{
            setCurrentSong(songs[currentIndex + 1])
           }        
        }
        if(dir == "back"){
            if(currentIndex == 0){
                setCurrentSong(songs[songs.length - 1])
            }else{
                setCurrentSong(songs[currentIndex - 1])
            }
        }
       
       
        
       
    }
    const timeUpdateHandler = (e)=>{
        setSongInfo({
            currentTime:Math.floor(e.nativeEvent.target.currentTime) ,
            duration:e.nativeEvent.target.duration
        })
    }
    const formatTime=(time)=>{
        return(
            Math.floor(time/60) + ":" + ("0"+ Math.floor(time % 60)).slice(-2)
        );
    }
    const dragHandler = (e)=>{
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo , currentTime:e.target.value})
    }
    return(
        <div className="player">
            <div className="time-control"> 
                <p>{formatTime(songInfo.currentTime)}</p>
                <input onChange={dragHandler} type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime}/>
                <p>{formatTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={()=> skipSong('back')} className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={()=>playSong()} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={()=> skipSong('next')} className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
            
        </div>
    )
}
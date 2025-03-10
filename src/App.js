import {React , useState} from 'react'
import { Song } from './components/Song/Song'
import { Player } from './components/Player/Player';
import { music } from './components/musicData';
import { SongList } from './components/SongList/SongList';
import { ToggleList } from './components/ToggleList/ToggleList';

function App() {
  const [url , setUrl] = useState('http://localhost:3000/songs');
    const [songs , setSongs] = useState(music);
    const [currentSong , setCurrentSong] = useState(songs[0]);
    const [isPlaying , setIsPlaying] = useState(false);
    const [showeListSong , setShoweListSong] = useState(false)
  
   
  return (
    <div className="App">
      
      <ToggleList showeListSong={showeListSong} setShoweListSong={setShoweListSong}/>
      <Song currentSong={currentSong}/>
      <Player setSongs={setSongs} currentSong={currentSong } isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} setCurrentSong={setCurrentSong}/>
      <SongList songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} showeListSong={showeListSong}/>
    </div>
  );
}

export default App;

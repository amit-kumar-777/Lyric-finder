import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App(){
const [artist,setArtist]=useState('')
const [song,setSong]=useState('')
const [lyrics,setLyrics]=useState('')

function searchLyrics(){
if (artist==='' || song==='') {
  return
}else{
  Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
  .then(res=>{
//    console.log(res);
    setLyrics(res.data.lyrics)
    })
  .catch(err => {
      setLyrics("Lyrics not found or an Invalid input,Enter as given example");
      console.error(err);
  });
}

}
return (
  <div className="App">
    <h1 className="header">Lyrics Finder</h1>
  <input className="inp" placeholder="Artist name" type="text" onChange={(e)=>{setArtist(e.target.value)}}></input>
  <input className="inp" placeholder="Song name" type="text" onChange={(e)=>{setSong(e.target.value)}}></input>
  <button className="btn" onClick={()=>searchLyrics()}>search</button>
  <p>Example: Artist:-justin bieber &  Song:baby</p>
  <hr />
  <pre>{lyrics}</pre>
  </div>
)
}


export default App

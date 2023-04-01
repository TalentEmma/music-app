import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import styled from "styled-components";
import { Track, PlayerInterface } from 'react-material-music-player';




export default function Myplaylist() {

    const accessToken = window.localStorage.getItem("token");
    const [songs, setSongs] = useState({})
    const [tracks, setTracks] = useState({})  
  
    //https://api.spotify.com/v1/me/playlists
    // https://api.spotify.com/v1/users/me/playlists

    useEffect(() => {
        const getPlaylist = async () => {
              const res = await axios.get("https://api.spotify.com/v1/users/me/playlists", {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}` 
                }
            })
 
            // console.log(res.data);

            if (res.data !== "") {

                const Playing = 
                {
   

                
                  id: res.data.items[0].id,
                  name: res.data.items[0].name,
                  artists: res.data.items[0].owner.display_name ? res.data.items[0].owner.display_name : "",
                  image: res.data.items[0].images[0].url,
                  track: res.data.items[0].tracks.href ? res.data.items[0].tracks.href : null,

                  

                };
                
                setSongs(Playing);
                // console.log(songs.track);
                localStorage.setItem('songs', JSON.stringify(songs))
                // console.log(localStorage.getItem('songs'));
               
              } else {
                window.localStorage.setItem("songs", null)
                
              }
           
        } 

        getPlaylist();

        const getTrackList = async () => {
         
          const trackRes = await axios.get(`${songs.track}`, {
          headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          }
          }).catch((err) => {
            console.log(err);
          });

          console.log(trackRes)
          if(trackRes !== "")
          {
            
            
          const selectedTrack = {
            item: trackRes.data.items.map(item => ({

                  // track: item.map(list => ({
                    id: item.track.id,
                    title: item.track.name,
                    artist: item.track.artists[0].name,
                    album: item.track.album.name,
                    duration: item.track.duration_ms / 60000,
                    image: item.track.album.images[0].url,
                    uri: item.track.uri,
                    url:item.track.preview_url,
                    // type: list.artists[0].type,
                  // })) ,

            })),     
            }

            setTracks(selectedTrack)
            localStorage.setItem('selectedTrack', JSON.stringify(selectedTrack))
            // console.log(tracks.item[2])
          }
          else
          {
            localStorage.setItem('selectedTrack', null)
          }
          
          // console.log(trackRes.data)
        
        }
        // console.log(songs.track)

    

       
        getTrackList();
      


    },[accessToken, songs, tracks]);



    
    const renderSongs = () => {
      // const tracks = (localStorage.getItem('selectedTrack'))
      return  tracks.item?.map((track, index)=> (
              <div key={track.id}
               onClick={() => {
        
                PlayerInterface.play([
                  new Track (
                    track.id, // unique ID used in shuffling and sorting
                    track.image,
                    track.title,
                    track.artist, 
                    track.url, // url to music file
                  ),
                ]);
              }} 
              className="music">
                      <p>{index +1} <img src={track.image} alt="" /> </p>
                      <p>{track.title}</p>
                      <p>{track.artists}</p>
                      <p>{track.duration}m</p>
                      <p>{track.album}</p>
                      
              </div>
        ))
      
    }
 




      

  return (
    <div className='playlist'>
         <div>
        <div className="headings">
                <p>#</p>
                <p>Title</p>
                <p>Artist</p>
                <p>Duration</p>
                <p>Album</p>
            </div>

                
              {
                renderSongs()
              }

            

           
    </div>
    </div>
  )
}

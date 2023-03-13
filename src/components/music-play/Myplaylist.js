import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { PlayerInterface } from 'react-material-music-player';




export default function Myplaylist() {

    const accessToken = window.localStorage.getItem("token");
    const [songs, setSongs] = useState({})
    const [tracks, setTracks] = useState({})  
  
    //https://api.spotify.com/v1/me/playlists




    useEffect(() => {

        const getPlaylist = async () => {
            const res = await axios.get(`https://api.spotify.com/v1/users/${accessToken.id}/playlists`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }).catch((err) => {
              console.log(err);
            })
              
            
          

            // console.log(res.data);

            if (res.data !== "") {

                const Playing = 
                {
                //   item: res.data.items.map(playlist => ({
                //         id: playlist.id,
                //         name: playlist.name,
                //         artists: playlist.owner.display_name ? playlist.owner.display_name : "",
                //         image: playlist.images[0].url,
                //         track: playlist.tracks.href ? playlist.tracks.href : null,

                // })),

                
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

        const getTrackList = async () => {
          const trackRes = await axios.get(`${songs.track}`, {
          headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          }
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
                    duration: item.track.duration_ms / 1000,
                    image: item.track.album.images[0].url,
                    uri: item.track.uri,
                    url:item.track.preview_url,
                    // type: list.artists[0].type,
                  // })) ,

            })),     
            }

            setTracks(selectedTrack)
            localStorage.setItem('selectedTrack', JSON.stringify(selectedTrack))
            console.log(tracks)
          }
          else
          {
            localStorage.setItem('selectedTrack', null)
          }
          
          // console.log(trackRes.data)
        
        }
        // console.log(songs.track)

    

        getPlaylist();
        getTrackList();
      


    }, [accessToken, songs, tracks]);




    // const tracks = (localStorage.getItem('songs'))
    // console.log(tracks)

    // const renderSongs = () => {
    //     return  songs.item?.map((song, index)=> (
    //             <div key={song.id} onClick={(e) => {
    //               e.preventDefault();
                  
    //               console.log(song.id)

                 
    //               console.log(song.id)

    //               setTrackId(song.id? song : null, index)
    //               console.log(trackId)

                  
    //               // styled.addClassName("active");
    //             }} className="music">
    //                     <p>{index +1}</p>
    //                     <p><img src={song.image} alt="" /></p>
    //                     <p>{song.artists}</p>
    //                     <p>{song.name}</p>
                        
    //             </div>
    //       ))
        
    //   }
 




      

  return (
    <div className='playlist'>
         <div>
        <div className="headings">
                <p>#</p>
                <p>image</p>
                <p>Artist</p>
              
                <p>Album</p>
            </div>

                
              {/* {
                renderSongs()
              } */}

            

           
    </div>
    </div>
  )
}
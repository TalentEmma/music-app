import React, { useState } from 'react';
import "./layout.css";


import { AiOutlineArrowLeft, AiOutlineArrowRight  } from 'react-icons/ai';
import { CiSearch } from "react-icons/ci";
import { MdArrowForwardIos } from 'react-icons/md';

import Myplaylist from './Myplaylist';


import Player from 'react-material-music-player' // default export

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const myPlayerStyle = {
 
  width: '80vw',
  padding: '0px 5px'
 // CSS CODE
 };


export default function Layout() {

  const accessToken = window.localStorage.getItem("token");
//   const currentPlaylist =localStorage.getItem("songs")

  return (
   <div> 
    
      {/* <Scrollbar /> */}

    <div className="music-section">
 

        <div className="head">
           <div className="icons">
           <AiOutlineArrowLeft />
            <AiOutlineArrowRight />
           </div>

            <div className="search">
              <div className="icon">
              <CiSearch/>
              </div>
                <input type="text" placeholder='search for artist, song and...' />
            </div>
           
        </div>

        <h5 className="hot">What's hot🔥</h5>

        <div className="divide">
            <h2>Trending</h2>
            <p>More <MdArrowForwardIos /> </p>
        </div>

        <div className="wallpaper-container">
            <img src="https://cdn.pixabay.com/photo/2016/03/28/09/36/music-1285165_960_720.jpg" alt="" /> 
//               {currentPlaylist.img} ? <img src={currentPlaylist.image} alt="laylist Image Here" /> : <img src="https://cdn.pixabay.com/photo/2016/03/28/09/36/music-1285165_960_720.jpg" alt="" />
       
        </div>

        <div className="divide">
            <h2>My Playlist</h2>
            <p>Show All </p>
        </div>

        <div className="music-list">

          <Myplaylist />
          
        </div>

      <div className="player">
      
      <Player style ={myPlayerStyle}/>
    
      </div>


    </div>
    </div> 
  )
}



import React from 'react'

import "./aside.css"

export default function Aside() {
  return (
    <div className='aside-container'>
      <h3 className="fav-heading">Shortcuts</h3>

      <div className="cards">

        <h5 className='card'>❄ Chill Hits</h5>

        <h5 className='card'>⭐ Hope</h5>

        <h5 className='card'>🎸 Accoustic </h5>

        <h5 className='card'>🎵 Indie Pop</h5>
  
        <h5 className='card'>🎹 Piano Blues</h5>
      
        <h5 className='card'>🎺 Jazz</h5>
      

      </div>


      <h3 className="fav-heading">FAV ARTIST</h3>
        

        <div className="artist">

          <div className="content">
            <img src="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg" alt="" />
            <div className="text">
              <h3>drake</h3>
              <p>190 sings in library</p>
            </div>
          </div>

          <div className="dot"> <h2>..</h2> </div>

        </div>

        <div className="artist">

          <div className="content">
            <img src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg" alt="" />
            <div className="text">
              <h3>taylor swift</h3>
              <p>190 sings in library</p>
            </div>
          </div>

          <div className="dot"> <h2>..</h2> </div>

        </div>

        <div className="artist">

          <div className="content">
            <img src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761__340.jpg" alt="" />
            <div className="text">
              <h3>Kanye west</h3>
              <p>190 sings in library</p>
            </div>
          </div>

          <div className="dot"> <h2>..</h2> </div>

        </div>

        <div className="artist">

          <div className="content">
            <img src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg" alt="" />
            <div className="text">
              <h3>Bill fishy</h3>
              <p>200 sings in library</p>
            </div>
          </div>

          <div className="dot"> <h2>..</h2> </div>

        </div>



    </div>
  )
}

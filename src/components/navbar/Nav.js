import React from 'react';

import "./nav.css"


// icons 
import { AiFillHome, AiOutlineHeart, AiOutlineMenuFold, AiOutlineStar } from 'react-icons/ai';
import { BiLogOut, BiTrendingUp } from 'react-icons/bi';
import { MdArrowForwardIos, MdOutlineFeedback, MdOutlineWidgets } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { GiButterflyFlower } from 'react-icons/gi'
import { FaUsers} from 'react-icons/fa';

export default function Nav({ token }) {

  const handleLogout = () => {
   
      // setToken("")
      window.localStorage.removeItem("token")
      window.location = "../../login";

  }

  return (
    
        
        <section className="navbar">
            
          <div className="menu">
          <AiOutlineMenuFold />
          </div>

          <div className="logo">
            <span><GiButterflyFlower/> Bee</span>Music
          </div>

          <div className="nav">

            <div className="nav-items active">
              <h3> <AiFillHome/> Home</h3>
            </div>

            <div className="nav-items">
              <h3> <BiTrendingUp/> Trends</h3>
            </div>

            <div className="nav-items">
              <h3> <MdOutlineFeedback/> Feeds</h3>
            </div>

            <div className="nav-title">
              <p>Discover</p>
            </div>

            <div className="nav-items">
              <h3> <MdOutlineWidgets/> New and Notable</h3>
            </div>

            <div className="nav-items">
              <h3> <SlCalender/> release Calendar</h3>
            </div>

            <div className="nav-items">
              <h3> <AiFillHome/> Events</h3>
            </div>

            <div className="nav-title">
              <p>Your Collections</p>
            </div>

            <div className="nav-items">
              <h3> <AiOutlineHeart/> Favorite Songs</h3>
            </div>

            <div className="nav-items">
              <h3> <FaUsers/> Artist</h3>
            </div>

            <div className="nav-items">
              <h3> <AiOutlineStar/> Albums</h3>
            </div>

            <div>
              <button className='logout-btn' onClick={handleLogout} > <BiLogOut className='text-red'/> Logout </button>
            </div>

          </div>
          
          <div className="user">
            <div className="photo-name">
                <img src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg" alt="" />
                <h3>Emmanuel Ngwu</h3>
            </div>
            <div className="icon">
            <MdArrowForwardIos />
            </div>
          </div>
        </section>
    
  )
}

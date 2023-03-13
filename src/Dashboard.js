import React from 'react'

import Aside from './components/aside-tab/Aside'
import Layout from './components/music-play/Layout'
import Nav from './components/navbar/Nav'
import App from './App'

export default function Dashboard({ token }) {
    const accessToken = App(token)
    
  return (
    <>

        <div className="App">
             <div className="container">
                
                <Nav token={token} />

                <Layout />

                <Aside />
     
              </div>
        </div>

        

    </>
  )
}

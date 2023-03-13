import React from 'react'
import styled from "styled-components";


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=dd61fac0155843e5809773ebbf895380&response_type=token&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

//   console.log(token)

export default function Login() {
  return (
   
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black-768x230.png" alt="spotify-logo" />

        <a href={AUTH_URL}>connect with spotify</a>
    </Container>
  )

}


const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items:center;
 justify-content: center;
 height: 100vh;
 width: 100vw;
 background-color: #1db954;
 gap: 5rem;
 img{
    height: 20vh;
 }
 a {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
 }

`;

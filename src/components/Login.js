import React from 'react'
import styled from 'styled-components';
const Login = () => {
    const handleClick=()=>{
        const clientId="b2f0413fa4524a17a21ba00c024bdcc6";
        const redirectUrl="http://localhost:3000/";
        const authendpoint="https://accounts.spotify.com/authorize";
        const scopes = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
          ];
          window.location.href=`${authendpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`;
    }
  return (
   <Container>
  <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify" />
  <button onClick={handleClick}>Connect Spotify</button>
   </Container>
  )
}

export default Login
const Container=styled.div` display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
width:100vw;
background-color:#000;
gap:5rem;
img{
    height:20vh;

}
button{
    padding:1rem 5rem;
    border-radius:5rem;
    border:none;
    background-color:white;
    color:black;
    font-size:1.4rem;
    cursor:pointer;
}
`;
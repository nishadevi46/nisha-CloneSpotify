import React,{useEffect} from 'react'
import { useStateProvider } from '../utlis/StateProvider';
import axios from 'axios'
import { reducerCases } from '../utlis/Constant';
import styled from 'styled-components'
const Playlist = () => {
    const [{token,playlists},dispatch]=useStateProvider();
    useEffect(()=>{
        const getPlaylistData=async()=>{
            const response=await axios.get("https://api.spotify.com/v1/me/playlists",{headers:{
                Authorization:"Bearer "+token,
                "Content-Type":"application/json",
            },
        }
        );
     const {items}=response.data;
     const playlists=items.map(({name,id})=>{
        return {name,id};
     })
   dispatch({type:reducerCases.SET_PLAYLISTS,playlists})
        };
        getPlaylistData();
    },[token,dispatch]);




    const changecurrentPlaylist=(selectedPlaylistId)=>{
        dispatch({type:reducerCases.SET_PLAYLIST_ID,selectedPlaylistId});
    }





  return (
    <Container>
   <ul>
    {
        playlists.map(({name,id})=>{
            return (<li key={id} onClick={()=>changecurrentPlaylist(id)} >{name}</li>)
        })
    }
   </ul>
    </Container>
  )
}

export default Playlist



const Container=styled.div`
height:100%;
overflow:hidden;
ul{
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padiing:1rem;
    height:52vh;
    overflow:auto;
    max-height:100%;
    &::-webkit-scrollbar{
width:0.7rem;
&-thumb{
    background-color:rgba(255,255,255,0.6);
}
    }
}
li{
    display:flex;
    gap:1rem;
    cursor:pointer;
    transition:0.3s ease-in-out;
    &:hover{
        color:white;
    }
}
`;
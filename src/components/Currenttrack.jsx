import React, { useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { reducerCases } from '../utlis/Constant';
import { useStateProvider } from '../utlis/StateProvider';
const Currenttrack = () => {
    const [{ token, currentPlaying}, dispatch] = useStateProvider();

    useEffect(() => {
        const getcurrenttrack = async () => {
            const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
            );
            if (response.data !== "") {
                const { item } = response.data;

                const currentPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artist) => artist.name),
                    image: item.album.images[2].url,    
                }
                dispatch({ type: reducerCases.SET_PLAYING, currentPlaying })
            }
            
        };
        getcurrenttrack();
    }, [token, dispatch]);


    return (
        <Container>

            {currentPlaying && (
                <div className="track">
                    <div className="track_img">
                        <img src={currentPlaying.image} alt="currentlyplaying" />
                    </div>
                    <div className="track_info">
                        <h4>{currentPlaying.name}</h4>
                        <h6>{currentPlaying.artists.join(", ")}</h6>
                    </div>
                </div>
            )
            }
        </Container>
    )
}

export default Currenttrack
const Container = styled.div`
.track{
    display:flex;
    align-items:center;
    gap:1rem;
    &_info{
    display:flex;
    flex-direction:column;
    gap:0.3rem;
    h4{
        color:white;
    }
    h6{          
        color:#b3b3b3;
    }
}
}

`
import React from 'react'
import styled from 'styled-components'
import Currenttrack from './Currenttrack'
import Playercontrol from './Playercontrol'
import Vol from './Vol'
const Footer = () => {
  return (
   <Container>
   <Currenttrack/>
  <Playercontrol/>
  <Vol/>
   </Container>
  )
}

export default Footer
const Container=styled.div`
background-color:#181818;
height:100%;
width:100%;
border-top:1px solid #282828;
display:grid;
grid-template-columns:1fr 2fr 1fr;
align-items:center;
justify-content:center;
padding:0 1rem;

`
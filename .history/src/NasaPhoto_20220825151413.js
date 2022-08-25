import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
   color: "blue";
   display: "flex";
   justify-content: space-evenly;
   background: "gray";
   padding: 20px;
`

 const NasaPhoto = (props) => {
    
    return(
  
      <StyledPhoto className= 'Main-body'>
    <h3>{props.photo.title}</h3>
    <img src = {props.photo.hdurl}/>
    <p>{props.photo.date}</p>
    <p>{props.photo.explanation}</p>
   </StyledPhoto>
     )

}

export default NasaPhoto;
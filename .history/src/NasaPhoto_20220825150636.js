import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
   color: "blue"
`

 const NasaPhoto = (props) => {
    
    return(
  
      <StyledPhoto>
    <h3>{props.photo.title}</h3>
    <img src = {props.photo.hdurl}/>
    <p>{props.photo.date}</p>
    <p>{props.photo.explanation}</p>
   </StyledPhoto>
     )

}

export default NasaPhoto;
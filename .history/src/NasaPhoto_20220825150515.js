import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
   
    color: "blue"
`

 const NasaPhoto = (props) => {
    
    return(
  <StyledPhoto>
   <div className="Main-body">
    <h3>{props.photo.title}</h3>
    <img src = {props.photo.hdurl}/>
    <p>{props.photo.date}</p>
    <p>{props.photo.explanation}</p>
   </div>
   </StyledPhoto>
     )

}

export default NasaPhoto;
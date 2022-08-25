import React from 'react';
import styled from 'bootstrap/dist/css/bootstrap.min.css';

const StyledPhoto = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`

 const NasaPhoto = (props) => {
    
    return(
  <div className="Main-body">
    <h3>{props.photo.title}</h3>
    <img src = {props.photo.hdurl}/>
    <p>{props.photo.date}</p>
    <p>{props.photo.explanation}</p>
   </div>
     )

}

export default NasaPhoto;
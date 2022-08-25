import React from 'react'

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
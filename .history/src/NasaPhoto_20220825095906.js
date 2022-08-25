import React from 'react'

 const NasaPhoto = (props) => {
    
    return(
  <div className="Main-body">
    <h3>{props.title}</h3>
    <img src = {props.hdurl}/>
    <p>{props.date}</p>
    <p>{props.explanation}</p>
   </div>
     )

}

export default NasaPhoto;
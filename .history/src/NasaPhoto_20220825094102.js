import React from 'react'

 const NasaPhoto = (props) => {
    
    return(
        <div className="Main-body">
    <img src = {props.hdurl}/>
    <p>{props.date}</p>
    <p>{props.explanation}</p>
</div>
     )

}

export default NasaPhoto;
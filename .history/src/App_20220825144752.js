import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
  import NasaPhoto from "./NasaPhoto";
//https://api.nasa.gov/planetary/apod?api_key=mQxXjap2fhcS1N0x9lsr1UGRLQf5DIr0suADxgyP
import {theme} from "style-components"


function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(()=> {
axios.get("https://api.nasa.gov/planetary/apod?api_key=mQxXjap2fhcS1N0x9lsr1UGRLQf5DIr0suADxgyP")
  .then(res => {
    setNasaData(res.data)
  })
  .catch(err=> {
    console.error(err)
  })
}, []);

  return (
    <div className="App">
      {nasaData && <NasaPhoto photo = {nasaData}/>}
    </div>
  );
}

export default App;



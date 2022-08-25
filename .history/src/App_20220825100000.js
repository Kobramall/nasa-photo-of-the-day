import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
  import NasaPhoto from "./NasaPhoto";
//https://api.nasa.gov/planetary/apod?api_key=mQxXjap2fhcS1N0x9lsr1UGRLQf5DIr0suADxgyP



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
      <NasaPhoto photo = {nasaData}/>
    </div>
  );
}

export default App;


/*<div className="App">
<header className="App-header">
  <p>NASA Photo of the Day!</p>
</header>
<div className="Main-body">
    <img src="https://apod.nasa.gov/apod/image/2208/Tiangong_transiting_moon_Lucy_Hu_APOD_submission.jpg"/>
    <p>This is the photo of the day!</p>
</div>
<footer>
  <p>
    Visit us at our website.
  </p>
</footer>
</div>*/
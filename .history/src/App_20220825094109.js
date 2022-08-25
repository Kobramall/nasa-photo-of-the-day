import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
  import NasaPhoto from "./NasaPhoto";
//https://api.nasa.gov/planetary/apod?api_key=mQxXjap2fhcS1N0x9lsr1UGRLQf5DIr0suADxgyP

const dummyData = {
  copyright: "Lucy Yunxi Hu",
   date: "2022-08-25",
  explanation: "The rugged lunar south polar region lies at the top of this colorful portrait of a last quarter Moon made on August 20. Constructed from video frames and still images taken at Springrange, New South Wales, Australia it also captures a transit of China's Tiangong Space Station. The transit itself was fleeting, taking the space station less than a second to cross the shadowed and sunlit lunar disk. The low Earth orbiting Tiangong is at an altitude of about 400 kilometers, while the Moon is some 400,000 kilometers away. Subtle color differences along the bright lunar surface are revealed in the multiple stacked frames. Not visible to the eye, they indicate real differences in chemical makeup across the lunar surface.",
  hdurl:"https://apod.nasa.gov/apod/image/2208/Tiangong_transiting_moon_Lucy_Hu_APOD_submission.jpg","title":"Tiangong Space Station Transits the Moon"
}


function App() {
  const [nasaData, setNasaData] = useState(dummyData)

  useEffect(()=> {
axios.get("https://api.nasa.gov/planetary/apod?api_key=mQxXjap2fhcS1N0x9lsr1UGRLQf5DIr0suADxgyP")
  .then(res => {
    console.log(res.data);
  })
  .catch(err=> {
    console.error(err)
  })
}, []);

  return (
    <div className="App">
      <NasaPhoto />
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
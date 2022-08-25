import React from "react";
import "./App.css";
//https://api.nasa.gov/planetary/apod?api_key=mQxXjap2fhcS1N0x9lsr1UGRLQf5DIr0suADxgyP


function App() {
  return (
    <div className="App">
      <header>
        <p>NASA Photo of the Day!</p>
      </header>
      <div className="Main-body">
        <div>
          <img src="https://apod.nasa.gov/apod/image/2208/Tiangong_transiting_moon_Lucy_Hu_APOD_submission.jpg"/>
        </div>
        <div>
          <p>This is the photo of the day!</p>
        </div>
      </div>
      <footer>
        <p>
          Visit us at our website.
        </p>
      </footer>
    </div>
  );
}

export default App;

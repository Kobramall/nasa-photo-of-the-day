import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
  import NasaPhoto from "./NasaPhoto";
//https://api.nasa.gov/planetary/apod?api_key=mQxXjap2fhcS1N0x9lsr1UGRLQf5DIr0suADxgyP
import { themeProvider } from "styled-components"
import styled from 'styled-components';

const StyledPhoto = styled.div`
   color: "blue";
   display: "flex";
   justify-content: space-evenly;
   background: ${pr => pr.theme.primaryColor};
   padding: 20px;
`

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
    <StyledPhoto className="App">
      {nasaData && <NasaPhoto photo = {nasaData}/>}
    </StyledPhoto>
  );
}

export default App;



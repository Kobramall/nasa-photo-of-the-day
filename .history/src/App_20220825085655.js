import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <p>NASA Photo of the Day!</p>
      </header>
      <div className="Main-body">
        <div>
          <img/>
        </div>
        <div>
          <p>This is the photo of the day!</p>
        </div>
      </div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;

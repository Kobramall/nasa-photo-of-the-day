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
      <footer>
        <p>
          Visit us at our website.
        </p>
      </footer>
    </div>
  );
}

export default App;

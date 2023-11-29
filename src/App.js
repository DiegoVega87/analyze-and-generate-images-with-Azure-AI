import React from 'react';
import { analyzeImage } from './azure-image-analysis.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer Vision</h1>
        <div>Insert URL or type prompt:</div>
        <input type="text" size = "50" placeholder="Enter URL to analize or textual prompt to generate an image" />
        <div><button onClick={analyzeImage()}> Analyze</button> <button>Generate</button></div>

      </header>
    </div>
  );
}



export default App;

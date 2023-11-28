

import analyzeImage from './azure-image-analysis';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer Vision</h1>
        <input type="text" size="50" placeholder="Enter URL to analyze or textual prompt to generate an image" />
        <div>
          <button onClick={callAnalyzeImage}>Analyze</button>
          <button>Generate</button>
        </div>
      </header>
    </div>

  );
}


function callAnalyzeImage() {
  analyzeImage();
}

export default App;
export { callAnalyzeImage };
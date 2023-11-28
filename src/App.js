import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer Vision</h1>
        <div>Insert URL or type prompt:</div>
        <input type="text" size = "50" placeholder="Enter URL to analize or textual prompt to generate an image" />
        <div><button onClick= "callAnalizeImage()"> Analyze</button> <button>Generate</button></div>

      </header>
    </div>
  );
}


function callAnalyzeImage() {
  callAnalyzeImage();
}

export default App;
export { callAnalyzeImage };
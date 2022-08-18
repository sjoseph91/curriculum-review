import React, {useState} from 'react';
import './App.css';
import Preview from './components/Preview';
import Selector from './components/Selector';

function App() {

  const initialGradientValues = {
    color1: "#abd123",
    color2: "#123abc",
    angle: 90
  }

  const [gradientValues, setGradientValues] = useState(initialGradientValues)

  return (
    <div className="App">
      <h1 className='heading'>CSS Gradient Code Generator</h1>
      <div className="outerContainer">
        <Preview data={gradientValues} />
        <Selector data={gradientValues} setGradientValues={setGradientValues}/>
      </div>
      
    </div>
  );
}

export default App;

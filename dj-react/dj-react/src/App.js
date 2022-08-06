import './App.css';
import React, {useState} from 'react';
import Square from "./components/Square";


function App() {

    const [colors, setColors] = useState(["white", "white", "white", "white"]);

    const squares = colors.map(color => <Square color={color}/>)

    function handleSmall(){
      setColors(prev => {
        if (prev[0] !== "white"){
          return prev.map(color => "white")
        }else{
          return prev.map(color => "black");
        }
      })
    }
    function handleParty(){
      setColors(prevColors => ["purple", "purple",prevColors[2], prevColors[3]])
    }
    function handleProfessional(e){
      let index = e.target.name ==="bottom-left" ? 2 : 3;
      setColors(prevColors => {
        let result = [...prevColors];
        result[index] = "blue";
        return result;
      })
    }
    function handleCustom(e){
        const index = +e.target.name;
        setColors(prev => {
          const final = [...prev];
          final[index] = prev[index] === "orange" ? "purple" : "orange";
          return final;
        })
    }

  return (
    <div className="App">
      <div className="container">
        {squares}
      </div>
      <div className="buttons">
        <button onClick={handleSmall}>DJ Small</button>
        <button onClick={handleParty}>Party DJ</button>
        <button name="bottom-left" onClick={handleProfessional}>Left Blue</button>
        <button name="bottom-right" onClick={handleProfessional}>Right Blue</button>
        <button name="0" onClick={handleCustom}>Big DJ one</button>
        <button name="1" onClick={handleCustom}>Big DJ two</button>
        <button name="2" onClick={handleCustom}>Big DJ three</button>
        <button name="3" onClick={handleCustom}>Big DJ four</button>
        <button>Make Noise</button>
      </div>
    </div>
    
  );
}

export default App;


import './App.css';
import React from 'react';


function App() {

  const [names, setNames] = React.useState([]);
  const [input, setInput] = React.useState("");

  
  function add(){
    setNames(prevNames => (
      [...prevNames, input]
    ))

    setInput("");
    document.getElementsByTagName("input")[0].focus();
  }

  const listItems = names.map(name => <li key={name}>{name}</li>)

  return (
    <div className="App">
      <input 
        type="text"
        name="input"
        value={input }
        onChange={(e) => setInput(e.target.value)}>
      </input>
      <h1>{input ? input : "Enter name above"}</h1>
      <button
        onClick={add}
        >Add Name
      </button>
      <ol className='list'>
        {names.length > 0 && listItems}
      </ol>
    </div>
  );
}

export default App;

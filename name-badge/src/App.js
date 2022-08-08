
import './App.css';
import Form from './Form';
import React from 'react';
import Badge from './Badge';


function App() {

  const [badges, setBadges] = React.useState([])

  function add(newBadge){
  setBadges(prevBadges => {
    return [...prevBadges, newBadge]
  })
}

  const badgeComponents = badges.map(badge => <Badge data={badge} key={badge.fName}/>)


  return (
    <div className="App">
      <Form add={add}/>
      {badges.length > 0 && badgeComponents}
    </div>
  );
}

export default App;

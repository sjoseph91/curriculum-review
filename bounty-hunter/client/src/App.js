import './App.css';
import CustomForm from "./components/CustomForm";
import {BountyContextProvider} from "./components/BountyContext"
import Bounties from './components/Bounties';

function App() {
  return (
    <BountyContextProvider>
      <div className="App">
            <CustomForm btnText="Add new bounty" isEdit={false}/>
            <Bounties />
      </div>
    </BountyContextProvider>
    
  );
}

export default App;

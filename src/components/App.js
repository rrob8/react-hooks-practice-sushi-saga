import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Wallet from './Wallet'

const API = "http://localhost:3001/sushis";

function App() {

  const [eatenSushi, setEatenSushi ] = useState([])
  const [ balance, setBalance] = useState(80)
  

  useEffect (()=>{
    if( eatenSushi.length !== 0) {
    const piece = eatenSushi.pop().price
    
  setBalance(balance - piece)
    }  
    
    
  }, [eatenSushi])
 
  function addMoney (amount) {
    console.log(amount)
    setBalance(balance+ parseInt(amount))
  }

  function eatSushi (sushi) {
    const eaten = [...eatenSushi, sushi]
    setEatenSushi(eaten)
  }
  console.log(eatenSushi)

  return (
    <div className="app">
      
      <SushiContainer onEatSushi={eatSushi} balance={balance}/>
      
      <Table eatenSushi={eatenSushi} balance={balance}/>
      <div className="table"> 
      <Wallet onAddMoney={addMoney}/>
      </div>
      
    </div>
  );
}

export default App;

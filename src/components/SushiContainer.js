import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({onEatSushi, balance}) {

  const [sushiList, setSushiList ] = useState([])
  const [ bottom, setBottom] = useState(0)
  const [ top, setTop] = useState(4)

  function sushiOnDisplay () {
     
  const four = sushiList.filter(sushi=> bottom < sushi.id && sushi.id <= top)
  return  four.map(sushi=> 
    <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} balance={balance}/>
   
      )}

  function nextFour () {
    setBottom(bottom+4)
    setTop(top+4)
  }
    
    

  useEffect(()=>
  fetch(`http://localhost:3001/sushis`)
  .then(r=> r.json())
  .then(data=> setSushiList(data))
  ,[])

  return (
    <div className="belt">
      {sushiOnDisplay()}     
     
    
      <MoreButton nextFour={nextFour} />
    </div>
  );
}

export default SushiContainer;

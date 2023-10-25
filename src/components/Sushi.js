import React, {useState} from "react";

function Sushi({sushi, onEatSushi, balance}) {
  
  const [eaten, setEaten] = useState(false)

  function handleClick () {
    if (balance < sushi.price) {
      window.alert('Not enough Money!')
      return window
    }
    setEaten(true)

    onEatSushi(sushi)
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price} {sushi.id}
      </h4>
    </div>
  );
}

export default Sushi;

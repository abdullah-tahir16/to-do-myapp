import React from "react";


const Items = React.memo((props) => {


  return (
    <div className="App">
     
          <li key={props.item.id}>
            <label>
              <input type="checkbox" onClick={() => props.onChangeBox(props.item)} checked={props.item.done} /> 
              <span className={props.item.done ? "done" : ""}>{props.item.text}</span>
            </label>
          </li>
    
    </div>
  );
});

export default Items;

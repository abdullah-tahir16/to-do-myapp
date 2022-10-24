
import {useEffect, useMemo, useState, useCallback} from "react";
import Items from "./Items";

function App() {
  const [checkedCount, setCheckCount] = useState(0);

  const [state, setState] = useState({
    items: [
      { id: 1,text: "Learn JavaScript", done: false },
      { id : 2,text: "Learn React", done: false },
      { id :3 ,text: "Play around in JSFiddle", done: true },
      { id: 4, text: "Build something awesome", done: true },
      
      { id:5, text: "Learn JavaScript", done: false },
      { id:6, text: "Learn React", done: false },
      { id:7 ,text: "Play around in JSFiddle", done: true },
      { id: 8 ,text: "Build something awesome", done: true }
      
    ]
  }
)

useMemo(()=>{
  let count =0;
  state.items.map(item =>{
    if(item.done ==true){
      count +=1;
    }
  })
  setCheckCount(count);
},[state.items])

const onChangeBox = useCallback((item)=> {
  setState(({ items }) => ({
    items: items.map(el =>
      el.id === item.id ? { ...el, done: !el.done } : el
    )
  }));
},[]);

console.log("parent")
  return (
    <div className="App">
      {state.items.map(item => (
          <Items item= {item} onChangeBox={onChangeBox} />
        ))}
        total item selected {checkedCount}
    </div>
  );
  
}


export default App;

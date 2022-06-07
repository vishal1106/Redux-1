
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import{ increment,decrement,multiplication,division,addition,substraction} from "./action"
import { useState } from 'react';

function App() {
const [input ,setInput]=useState(0)
const [x,setX]=useState(0)

  const dispatch=useDispatch();
  const count=useSelector((state)=>
  state.count
  );
 
  const clickhandler=()=>{
    setX(input)
    setInput("")
   
  }
  const onchangehandler=(e)=>{
    setInput(e.target.value)
  }



  return (
    <div className="App">
    <h1>Counter:
      {count}
      </h1>
      <h3>x:{x}</h3>
    <div>
      <input type="text"  placeholder="Enter Number" onChange={onchangehandler}/>
      <button onClick={clickhandler}>x</button>

    </div>
    
    <div>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>

    </div>
    <div>
    <button onClick={()=>dispatch(addition(x))}>add</button>
      <button onClick={()=>dispatch(substraction(x))}>subtract</button>
    </div>
    <div>
    <button onClick={()=>dispatch(multiplication(x))}>multiply</button>
      <button onClick={()=>dispatch(division(x))}>divide</button>
    </div>
    </div>
  );
}

export default App;

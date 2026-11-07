import './App.css'
import { useState } from 'react'

function App() {

  // let counter = 15
  let [counter, setCounter] = useState(15)
  const addValue=()=>{
    counter+=1;
    setCounter(counter)
    console.log("val+=1");
    
  }
  const removeValue=()=>{
    setCounter(counter-1)
    console.log("val-=1");
    
  }
    return (
      <>
        <div>React</div>
        <h1>
          counter value: {counter}
        </h1>
        <button
        onClick={addValue}
        >Add Value</button>
        <br />
        <button
        onClick={removeValue}
        >Remove Value</button>
      </>
    )
}

export default App

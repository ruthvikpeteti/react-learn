// Styles for this component (mostly unused Vite template leftovers).
import './App.css'
// useState is a "hook": a function that lets a component remember data between renders.
import { useState } from 'react'

function App() {

  // let counter = 15
  // ^ A plain variable would NOT work: changing it doesn't tell React to redraw the screen.

  // useState(15) gives back a pair:
  //   counter    -> the current value (starts at 15)
  //   setCounter -> the function to change it. Calling it makes React re-render
  //                 this component with the new value.
  let [counter, setCounter] = useState(15)

  const addValue=()=>{
    // Not ideal: this changes the state variable directly before calling the setter.
    // It happens to work, but state should only be changed through the setter.
    // Better: setCounter(counter + 1)  or  setCounter(prev => prev + 1)
    counter+=1;
    setCounter(counter)
    console.log("val+=1");

  }
  const removeValue=()=>{
    // Correct pattern: pass the NEW value to the setter, don't mutate counter.
    setCounter(counter-1)
    console.log("val-=1");

  }
    return (
      <>
        <div>React</div>
        <h1>
          {/* Shows the current state; updates automatically after each setCounter */}
          counter value: {counter}
        </h1>
        {/* onClick gets the function itself (addValue), not addValue().
            With parentheses it would run immediately on render instead of on click. */}
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

import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(10)
  const [isNumberAllowed,setIsNumberAllowed] = useState(false)
  const [isCharacterAllowed,setIsCharacterAllowed] = useState(false)
  const [password,setPassword] = useState("")
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let data = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if (isNumberAllowed) {
      data += "1234567890"
    }
    if (isCharacterAllowed) {
      data += "`!@#$%^&*(){}|[];:',./<>?œ∑´®†¥¨ˆøπåß∂ƒ©˙∆"
    }
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * data.length + 1)
      pass+= data.charAt(index)
    }
    setPassword(pass)
  },[length,isNumberAllowed,isCharacterAllowed,setPassword])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,isNumberAllowed,isCharacterAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 '>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
          ref={passwordRef}
          ></input>
          <button className='outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0'
          onClick = {copyPasswordToClipboard}>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" className="cursor-pointer" min={6} max={100} value={length} onChange={(e)=>{setLength(Number(e.target.value))}}/>
            <label >Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={isNumberAllowed}
            id='numberInput'
            onChange={(e)=>{setIsNumberAllowed((prev) =>  !prev)}} />
          </div>
          <label htmlFor='numberInput'>Number</label>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={isCharacterAllowed}
            id='charInput'
            onChange={(e)=>{setIsCharacterAllowed((prev) =>  !prev)}} />
          </div>
          <label htmlFor='charInput'>Character</label>
        </div>
      </div>
    </>
  )
}

export default App

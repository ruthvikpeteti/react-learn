import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
     <div className='w-full h-screen flex flex-col justify-end items-center' style={{backgroundColor: color}}>
        <div className='mb-14 rounded-lg bg-white p-3'>
          <button className='text-white bg-blue-500 rounded-lg pt-1 pb-1 pl-2 pr-2 mr-4'
          onClick={()=>{setColor("blue")}}>
            Blue
          </button>
          <button className='text-white bg-red-500 rounded-lg pt-1 pb-1 pl-2 pr-2 mr-4'
          onClick={()=>{setColor("red")}}>
            Red
          </button>
          <button className='text-white bg-olive-500 rounded-lg pt-1 pb-1 pl-2 pr-2 mr-4'
          onClick={()=>{setColor("olive")}}>
            Olive
          </button>
          <button className='text-white bg-green-500 rounded-lg pt-1 pb-1 pl-2 pr-2 mr-4'
          onClick={()=>{setColor("green")}}>
            Green
          </button>
          <button className='text-white bg-cyan-500 rounded-lg pt-1 pb-1 pl-2 pr-2 mr-4'
          onClick={()=>{setColor("cyan")}}>
            Cyan
          </button>
          <button className='text-white bg-yellow-500 rounded-lg pt-1 pb-1 pl-2 pr-2 mr-4'
          onClick={()=>{setColor("yellow")}}>
            Yellow
          </button>
          <button className='text-white bg-pink-500 rounded-lg pt-1 pb-1 pl-2 pr-2 mr-4'
          onClick={()=>{setColor("pink")}}>
            Pink
          </button>
          <button className='text-white bg-purple-500 rounded-lg pt-1 pb-1 pl-2 pr-2 mr-4'
          onClick={()=>{setColor("purple")}}>
            Purple
          </button>
          <button className='text-white bg-stone-500 rounded-lg pt-1 pb-1 pl-2 pr-2 mr-4'
          onClick={()=>{setColor("stone")}}>
            Stone
          </button>
          <button className='text-white bg-black rounded-lg pt-1 pb-1 pl-2 pr-2 mr-4'
          onClick={()=>{setColor("black")}}>
            Black
          </button>
        </div>
     </div>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const ReactElement = {
    type: "a",
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}
const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit google </a>
)
const reactElement = React.createElement(
  'a',
  {href:'google.com',target: '_blank'},
  'click me to visit google'
)
const root = createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Myapp /> */}
   { AnotherElement}
    {/* <ReactElement /> */}
    {reactElement}
  </StrictMode>,
)


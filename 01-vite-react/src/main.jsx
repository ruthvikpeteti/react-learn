// StrictMode: a dev-only wrapper that warns about bad practices and runs some
// things twice on purpose to expose bugs. It does not change what you see.
import { StrictMode } from 'react'
// We import React itself here only because we use React.createElement below.
import React from 'react'
// createRoot connects React to a real DOM element on the page.
import { createRoot } from 'react-dom/client'
// Our top-level component (currently not rendered, see the commented-out lines below).
import App from './App.jsx'

// A component: a function with a Capital name that returns JSX.
// Not used right now because <Myapp /> is commented out below.
function Myapp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// A plain object shaped like a React element (same idea as customReact.js).
// React can NOT render this: a real element has `props.children`, not `Children`,
// so using it as <ReactElement /> or {ReactElement} would fail.
const ReactElement = {
    type: "a",
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}

// Way 1: JSX. Looks like HTML, but it is JavaScript; the build tool converts it
// into a React.createElement(...) call (see Way 2). This is what you'll write 99% of the time.
const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit google </a>
)

// Way 2: React.createElement(tag, props, children). This is what JSX turns into
// behind the scenes.
// Note: href is 'google.com' with no https://, so the browser treats it as a
// relative link (localhost:5173/google.com). It should be 'https://google.com'.
const reactElement = React.createElement(
  'a',
  {href:'google.com',target: '_blank'},
  'click me to visit google'
)

// 1. document.getElementById('root') finds the empty <div id="root"> in index.html.
// 2. createRoot(...) makes React take control of that div.
// 3. .render(...) tells React what UI to draw inside it.
// (`const root =` isn't useful: render() returns nothing, so root is undefined.)
const root = createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Myapp /> */}
    {/* {} lets you put a JS value (our JSX element) inside JSX */}
   { AnotherElement}
    {/* <ReactElement /> */}
    {reactElement}
  </StrictMode>,
)


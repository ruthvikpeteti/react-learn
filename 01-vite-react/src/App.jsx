// Import the Learn component from learn.jsx (the .jsx extension is optional).
import Learn from './learn'

// App is the root component: the top of the component tree.
// Component names must start with a capital letter.
function App() {
  // A normal JS variable. It never changes, so it doesn't need state.
  const username = 'Ruthvik'
  return (
    // its called a fragment
    <>
      {/* Using a component looks like an HTML tag: <Learn /> runs the Learn function */}
      <Learn />
      {/* {username} puts the JS variable's value into the page */}
      <h1>Learning React || {username}</h1>
    </>
  )// return can only return one element so we cant have learn ans h1 separately so we wrap them inside one element and return that
}

// export default lets other files do `import App from './App.jsx'`.
export default App

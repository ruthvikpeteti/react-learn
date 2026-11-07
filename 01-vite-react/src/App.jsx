import Learn from './learn'
function App() {
  const username = 'Ruthvik'
  return (
    // its called a fragment
    <>
      <Learn />
      <h1>Learning React || {username}</h1>
    </>
  )// return can only return one element so we cant have learn ans h1 separately so we wrap them inside one element and return that
}

export default App

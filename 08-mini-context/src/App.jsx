import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'
function App() {

  return (
    <UserContextProvider>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

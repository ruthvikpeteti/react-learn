import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App

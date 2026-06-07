import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { useTheme } from './Context/ThemeContext'

const App = () => {
  return (
    <div>
       <Navbar/>
          <Routes>
                  <Route path='/' element={<Home/>}>Home</Route>
                  <Route path='/about' element={<About/>}>About</Route>
      </Routes>
     
    </div>
  )
}

export default App
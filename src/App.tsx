import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Products from './components/Products'
import Discounts from './components/Discounts'

function App() {


  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/discounts' element={<Discounts/>}/>
      </Routes>
    </Router>
  )
}

export default App

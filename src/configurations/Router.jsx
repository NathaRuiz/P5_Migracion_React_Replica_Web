import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Description from '../views/Description'
import Screens from '../views/Screens'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/description' element={<Description/>}/>
            <Route path='/screens' element={<Screens/>}/>
        </Routes>    
    </BrowserRouter>
  )
}

export default Router
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Bank from '../Pages/Bank'
import Home from '../Pages/Home'

const Routings = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/bank' element={<Bank />}/>
    </Routes>
  )
}

export default Routings

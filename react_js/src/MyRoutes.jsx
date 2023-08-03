import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test1 from './Test1'
import First from './first'
import Show from './Show'

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='Test1' element={<Test1/>}/>
            <Route path=''  element={<First/> } />
            <Route path='Show' element={<Show/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes

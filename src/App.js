import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import GetApodDate from "./pages/GetApodDate"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<GetApodDate />} path="/" />
      </Routes>
    </Router>
  )
}

export default App
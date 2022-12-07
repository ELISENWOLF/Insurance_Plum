import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from "./pages/home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/main.scss"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signin from './components/signin/Signin'
import Register from './components/register/Register'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App


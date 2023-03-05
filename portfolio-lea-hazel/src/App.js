import React from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import "./App.css"

import Header from "./component/Header"
import Footer from "./component/Footer"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

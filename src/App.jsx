import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Footer, Header, Navigator, Project } from "./components"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { HomePage, Portfolio, Contact, Resume, About } from "./pages"

function App() {

    

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>




            <Footer />
        </BrowserRouter>
    )
}


export default App
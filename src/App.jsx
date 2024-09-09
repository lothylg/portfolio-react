import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Footer, Header, Navigator, Project } from "./components"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { HomePage, Portfolio, Contact, Resume, About } from "./pages"
// didn't end up using Homepage

// lots of the content / styling will be in the css and/or the components
function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* about is twice because instructions say it needs to load up right away */}
                <Route path="/" element={<About />} />
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
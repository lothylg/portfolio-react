import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Footer, Header, MainBody } from "./components"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { HomePage, Portfolio, Contact, Resume } from "./src/pages"

function App() {


    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bio" element={<Contact />} />
                <Route path="/about" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <MainBody />



            <Footer element={<Resume/>}/>
        </BrowserRouter>



    </>
}


export default App
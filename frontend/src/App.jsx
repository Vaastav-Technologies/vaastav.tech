import {useState} from 'react'
import './App.css'
import {Route, Routes} from 'react-router'
import {Header} from "./components/Header/Header.jsx";
import {Footer} from "./components/Header/Footer.jsx";
import {HomePage} from "./pages/Home/Home.jsx";
import {AboutPage} from "./pages/About/About.jsx";
import {AIPage} from "./pages/AI/AI.jsx";
import {DownloadPage} from "./pages/Download/Download.jsx";
import {PricingPage} from "./pages/Pricing/Pricing.jsx";
import {ProductsPage} from "./pages/Products/Products.jsx";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/ai' element={<AIPage />} />
                <Route path='/download' element={<DownloadPage />} />
                <Route path='/pricing' element={<PricingPage />} />
                <Route path='/products' element={<ProductsPage />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App

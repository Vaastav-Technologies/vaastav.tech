import {useState, useEffect} from 'react'
import './App.css'
import {Route, Routes} from 'react-router'
import {Header} from "./components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {HomePage} from "./pages/Home/Home.jsx";
import {AboutPage} from "./pages/About/About.jsx";
import {AIPage} from "./pages/AI/AI.jsx";
import {DownloadPage} from "./pages/Download/Download.jsx";
import {PricingPage} from "./pages/Pricing/Pricing.jsx";
import {ProductsPage} from "./pages/Products/Products.jsx";
import js from "@eslint/js";

function App() {
    const [ themeMode, setThemeMode ] = useState(localStorage.getItem("themeMode") || "light")
    
    useEffect(() => {
        localStorage.setItem("themeMode", themeMode)
        
        const root = document.documentElement;
        
        if(themeMode === "automatic") {
            const autoMode = window.matchMedia("(prefers-color-scheme: dark)").matches
            root.setAttribute("data-theme", autoMode ? "dark" : "light")
        } else {
            root.setAttribute("data-theme", themeMode)
        }
        
    }, [themeMode])
    
    return (
        <>
            <Header themeMode={themeMode} onChangeThemeMode={setThemeMode}/>
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

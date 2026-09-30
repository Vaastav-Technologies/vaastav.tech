import "./Header.css"
import LogoImage from "../../assets/favicon-96x96.png"
import {NavLink, Link} from 'react-router'
import {Button} from "../Button/Button.jsx";
import {useState} from "react";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa6';

export function Header({value, onChangeThemeMode}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
    
    const navOptions = [<li><NavLink className="header-nav-link" to="/about">About Us</NavLink></li>,
        <li><NavLink className="header-nav-link" to="/download">Download</NavLink></li>,
        <li><NavLink className="header-nav-link" to="/products">Products</NavLink></li>,
        <li><NavLink className="header-nav-link" to="/pricing">Pricing</NavLink></li>,
        <li><NavLink className="header-nav-link" to="/ai">AI</NavLink></li>]
    
    return (
        <div id="header">
            <div className="header-left">
                <Link to={"/"} className="header-logo-link">
                    <img className="logo-img" alt="Vaastav Logo" src={LogoImage}/>
                    Vaastav Tech
                </Link>
            </div>
            <nav className={ isMenuOpen ? 'nav nav--open' : 'nav'}>
                <ul>
                    {navOptions.map(option => option)}
                </ul>
            </nav>
            <div className="header-right">
                <div className="theme-toggle">
                    <button className="theme-btn" aria-label="Theme Mode" onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}><FaRegLightbulb className="theme-icon" size={20} /> </button>
                    {
                        isThemeMenuOpen && (
                            <div className="theme-menu">
                                <ul>
                                    <li><button>Automatic</button></li>
                                    <li><button>Light</button></li>
                                    <li><button>Dark</button></li>
                                </ul>
                            </div>
                        )
                    }
                </div>
                 <Button to="/login" variant="secondary">Login</Button>
                <Button to="/signup" variant="primary">Sign up</Button>
                <button className="menu-btn" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)} >{isMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}</button>
            </div>
        </div>
    )
}

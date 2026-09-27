import "./Header.css"
import LogoImage from "../../assets/favicon-96x96.png"
import {NavLink, Link} from 'react-router'
import {Button} from "../Button/Button.jsx";
import {useState} from "react";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
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
                <Button to="/login" variant="secondary">Login</Button>
                <Button to="/signup" variant="primary">Sign up</Button>
                <Button variant="primary" size="small" onClick={() => setIsMenuOpen(!isMenuOpen)} >{isMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}</Button>
            </div>
        </div>
    )
}

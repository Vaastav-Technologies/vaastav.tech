import "./Header.css"
import LogoImage from "../../assets/favicon-96x96.png"
import {NavLink, Link} from 'react-router'
import {Button} from "../Button/Button.jsx";
import {useState} from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navOptions = [<li><NavLink to="/about">About Us</NavLink></li>,
        <li><NavLink to="/download">Download</NavLink></li>,
        <li><NavLink to="/products">Products</NavLink></li>,
        <li><NavLink to="/pricing">Pricing</NavLink></li>,
        <li><NavLink to="/ai">AI</NavLink></li>]
    
    return (
        <div id="header">
            <div className="header-left">
                <Link to={"/"}><img alt="Vaastav Logo" src={LogoImage}/>
                    Vaastav Tech
                </Link>
            </div>
            <nav>
                <ul>
                    {navOptions.map(option => option)}
                </ul>
            </nav>
            <div className="header-right">
                <Button to="/login" variant="secondary">Login</Button>
                <Button to="/signup" variant="primary">Sign up</Button>
                <Button variant="primary">Menu</Button>
            </div>
        </div>
    )
}

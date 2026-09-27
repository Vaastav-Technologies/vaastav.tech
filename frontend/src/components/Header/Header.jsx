import "./Header.css"
import LogoImage from "../../assets/favicon-96x96.png"
import { NavLink } from 'react-router'
import {Button} from "../Button/Button.jsx";

export function Header() {

    return (
        <div id="header">
            <div className="header-left">
                <img alt="Vaastav Logo" src={LogoImage}/>
                <span>Vaastav Tech</span>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/about">About Us</NavLink> </li>
                    <li><NavLink to="/download">Download</NavLink> </li>
                    <li><NavLink to="/products">Products</NavLink> </li>
                    <li><NavLink to="/pricing">Pricing</NavLink> </li>
                    <li><NavLink to="/ai">AI</NavLink> </li>
                </ul>
            </nav>
            <div className="header-right">
                <Button to="/login" variant="secondary">Login</Button>
                <Button to="/signup" variant="primary">Sign up</Button>
            </div>
        </div>
    )
}

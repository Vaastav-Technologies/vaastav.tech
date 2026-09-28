import "./Footer.css"
import LogoImage from "../../assets/favicon-96x96.png";
import {Link} from "react-router";
import {FaFacebook, FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa6';

export function Footer() {

    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <Link to={"/"} className="footer-logo-link">
                        <img className="logo-img" alt="Vaastav Logo" src={LogoImage}/>
                        Vaastav Tech
                    </Link>
                </div>
                <div className="footer-middle">
                    <ul>
                        <li><Link className="footer-nav-link" to="/download">Download</Link></li>
                        <li><Link className="footer-nav-link" to="/products">Products</Link></li>
                        <li><Link className="footer-nav-link" to="/pricing">Pricing</Link></li>
                        <li><Link className="footer-nav-link" to="/ai">AI</Link></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <a href="https://github.com/Vaastav-Technologies" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={24}/>
                    </a>
                    <a href="https://www.linkedin.com/company/vaastav-tech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={24}/>
                    </a>
                    <a href="https://www.instagram.com/tech.vaastav/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram size={24}/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook size={24}/>
                    </a>
                </div>
            </div>
            <div className="footer-bottom"><p>© {new Date().getFullYear()} Vaastav Tech. All rights reserved.</p></div>
        </footer>
    )
}

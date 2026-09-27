import "./Hero.css"
import {Button} from "../../components/Button/Button.jsx";

export function HeroSection() {
    return (
        <section id="hero">
            <div className="hero-content">
                <h1>Build, deploy, and scale without limits.</h1>
                <p>Streamline your development workflow with powerful tools built for modern engineering teams.</p>
            </div>
            <div className="hero-buttons">
                <Button to={"/login"} variant="primary">Get Started</Button>
                <Button to={"/products"} variant="primary">Explore Our Products</Button>
            </div>
            {/*<div className="hero-image">*/}
            {/*    <div className="hero-img">Placeholder Container</div>*/}
            {/*</div>*/}
        </section>
    )
}
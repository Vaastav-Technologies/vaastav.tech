import "./Button.css"
import { Link } from "react-router"
export function Button ({variant="primary", size="medium", to, children, onClick }) {
    const className = `button button-${variant} button-${size}`
    if (to) {
        return (
            <Link to={to} className={className}>{children}</Link>
        )
    }
    
    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}
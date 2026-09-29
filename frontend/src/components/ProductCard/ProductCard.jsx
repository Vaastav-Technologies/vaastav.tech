import "./ProductCard.css"
import {Button} from "../Button/Button.jsx";
import { FaStar } from 'react-icons/fa6';

export function ProductCard({product}) {
    const {id, name, description, category, language, isPublic, stars, githubUrl} = product
    return (
        <div className="product-card">
            <div className="product-card-left">
                {language.slice(0,1).toUpperCase()}
            </div>
            <div className="product-card-right">
                <p>{category}</p>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>{stars ? stars : "0"} <FaStar size={12} /></span>
                <p>Github Link: {isPublic ? githubUrl : "Not listed"}</p>
            </div>
            <Button variant="primary" />
        </div>
    )
}
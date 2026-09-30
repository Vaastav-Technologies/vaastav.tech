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
                <p className={"category"}>{category}</p>
                <h3>{name}</h3>
                <p className={"description"}>{description}</p>
                <p className={"stars"}>{stars ? stars : "0"} <FaStar size={12} /></p>
                <p className={"github-url"}>Github Link: {isPublic ? githubUrl : "Not listed"}</p>
                <Button variant="primary" children="View Product" />
            </div>
            
        </div>
    )
}
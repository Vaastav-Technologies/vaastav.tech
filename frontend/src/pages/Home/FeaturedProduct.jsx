import "./FeatureProducts.css"
import { Button } from "../../components/Button/Button.jsx"
import {useState} from "react";

export function FeaturedProducts() {
    const [searchInput, setSearchInput] = useState("")
    
    return (
        <section id="featured-products">
            <h2>Our Featured Products</h2>
            <div className="search-bar-container">
                {/*<SearchBar>*/}
                
            </div>
            <div className="products-grid">
                
            </div>
            
            <Button to={"/products"} variant="secondary">View All Products</Button>
        </section>
    )
}
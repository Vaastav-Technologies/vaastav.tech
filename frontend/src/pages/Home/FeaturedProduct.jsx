import "./FeatureProducts.css"
import { Button } from "../../components/Button/Button.jsx"
import { SearchBar} from "../../components/SearchBar/SearchBar.jsx";
import {useState} from "react";

export function FeaturedProducts() {
    const [searchInput, setSearchInput] = useState("")
    
    return (
        <section id="featured-products">
            <div className="featured-products-container">
                <h2>Our Featured Products</h2>
                <div className="search-bar-container">
                    <SearchBar className="search-bar" />
                </div>
                <div className="products-grid">

                </div>
            </div>
            <Button to={"/products"} variant="primary">View All Products</Button>
        </section>
    )
}
import "./FeatureProducts.css"
import { Button } from "../../components/Button/Button.jsx"
import { SearchBar} from "../../components/SearchBar/SearchBar.jsx";
import {ProductCard} from "../../components/ProductCard/ProductCard.jsx";
import {products} from "../../data/product.js"
import {useState} from "react";

export function FeaturedProducts() {
    const [searchInput, setSearchInput] = useState("")
    
    let filteredProductList
    
    if (!searchInput.trim()) {
        filteredProductList = products.slice(0, 3)
    } else {
        filteredProductList = products.filter(p => p.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            p.description.toLowerCase().includes(searchInput.toLowerCase()) ||
            p.category.toLowerCase().includes(searchInput.toLowerCase())).slice(0, 3)
    }
    
    return (
        <section id="featured-products">
            <div className="featured-products-container">
                <h2>Our Featured Products</h2>
                <div className="search-bar-container">
                    <SearchBar />
                </div>
                <div className="products-grid">
                    {filteredProductList.map(p => <ProductCard key={p.id} product={p}/>)}
                </div>
            </div>
            <Button to={"/products"} variant="primary">View All Products</Button>
        </section>
    )
}
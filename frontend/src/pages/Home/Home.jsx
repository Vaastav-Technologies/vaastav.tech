import "./Home.css"
import {HeroSection} from "./Hero.jsx";
import {FeaturedProducts} from "./FeaturedProduct.jsx"

export function HomePage() {

  return (
    <main>
    <title>Home Page</title>
      <HeroSection />
      <FeaturedProducts />
    </main>
  )
}

import { Link } from "react-router-dom";
import { ProductCard } from "../../Components/Card"
import { useCart } from "../../Context/cartContext"
import "./productListing.css";

export const ProductListingPage = () => {

    const {cartState} = useCart();

    return(
        <>
        <div className="nav">        
            <Link to="/cart" ><button className="goto">go to cart</button></Link>
        </div>

        <div className="main-wrapper">
            {
                cartState.products.map(product => (
                     <ProductCard key={product.id} productData = {product} />
                ))
            }
        </div>

        </>
    )
}
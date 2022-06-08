import { Link } from "react-router-dom";
import { useCart } from "../Context/cartContext"

export const ProductCard = ({productData}) => {

    const { cartDispatch, cartState } = useCart();

    const addToCartHandler = (item) => {
        cartDispatch({type : "ADD_TO_CART", payload : item});
    }

    return (
        <div className="card-wrapper shadow-1">
        <div className="card">
          <div className="card-image">
            <img className="img-cards" src={productData.img} alt="img" />
            <span className="badge-new hide">New</span>
            <span className="delete-icon hide">&times;</span>
          </div>
          <div className="card-details">
            <div className="card-item">
              <h2 className="card-product-name">{productData.title}</h2>
              <span className="icon-card icon-heart"><i className="fas fa-heart"></i></span>
            </div>
            <div className="card-price">
              Rs.
              <span className="price">{productData.price}</span>
              <span className="price text-discount">10%</span>
            </div>
            <div className="card-btn">
                {
                    cartState.cartItems.find(item => item.id == productData.id)
                    ?
                    <Link to="/cart"><button className="w-100 c2  btn-card btn-primary-card">
                        <span className="icon-card"><i className="fas fa-shopping-cart"></i></span>
                        Go to Cart
                    </button>
                    </Link>
                    :
                    <button onClick={() => addToCartHandler(productData)} className="w-100  btn-card btn-primary-card">
                        <span className="icon-card"><i className="fas fa-shopping-cart"></i></span>
                        Add to Cart
                    </button>
                }
              
            </div>
          </div>
        </div>
      </div>
    )
}
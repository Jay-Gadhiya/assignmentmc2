import { useCart } from "../Context/cartContext";

export const HorizontalCard = ({product}) => {

    const {cartDispatch, cartState} = useCart();

    const increaseQuantity = (item) => {
        cartDispatch({type : "INCREASE_QUANTITY", payload : item});
    }   

    const decreaseQuantity = (item) => {
        cartDispatch({type : "DECREASE_QUANTITY", payload : item});
    }
    
    const removeFromCartHandler = (item) => {
        cartDispatch({type : "REMOVE_FROM_CART", payload : item});
    }
    
    const saveToLaterHandler = (item) => {
        cartDispatch({type : "SAVE_FOR_LATER", payload : item})
    }
    
    const addToCartHandler = (item) => {
        cartDispatch({type : "ADD_TO_CART", payload : item});
    }

    const removeFromSavedHandler = (item) => {
        cartDispatch({type : "REMOVE_FROM_SAVED", payload : item});
    }

  return (
    <div className="card-horizontal-wrapper">
      <div className="horizontal-card">
        <div className="card-horizontal-image">
          <img className="img-cards" src={product.img} alt="img" />
          <span className="badge-new hide">New</span>
          <span className="delete-icon hide">&times;</span>
        </div>
        <div className="card-details">
          <div className="card-item">
            <h1 className="card-product-name">{product.title}</h1>
            <span className="icon-card icon-heart">
              <i className="fas fa-heart"></i>
            </span>
          </div>
          <div className="card-price">
            Rs.
            <span className="price">{product.price}</span>
            <br />
            <br />
            <button onClick={() => increaseQuantity(product)} classNameName="qty">+</button>
            <span className="price">Quantity : {product.qty}</span>
            <button onClick={() => decreaseQuantity(product)} classNameName="qty">-</button>
          </div>
          <div className="card-btn">
              {
                  cartState.cartItems.find(item => item.id == product.id)
                  ?
                  <button onClick={() => removeFromCartHandler(product)} className="btn-card btn-primary-card">
                    <span className="icon-card">
                        <i className="fas fa-shopping-cart"></i>
                    </span>
                    Remove from cart
                  </button>
                  :
                  <button onClick={() => addToCartHandler(product)} className="btn-card btn-primary-card">
                    <span className="icon-card">
                        <i className="fas fa-shopping-cart"></i>
                    </span>
                    Add to Cart
                  </button>

              }

              {
                  cartState.saveLaterItems.find(item => item.id === product.id)
                  ?
                  <button onClick={() => removeFromSavedHandler(product)} className="btn-card btn-wishlist">
                    <span className="icon-card">
                        <i className="fas fa-shopping-cart"></i>
                    </span>
                    Remove from saved
                </button>
                :
                <button onClick={() => saveToLaterHandler(product)} className="btn-card btn-wishlist">
                <span className="icon-card">
                    <i className="fas fa-shopping-cart"></i>
                </span>
                Save for later
                </button>

              }
            
          </div>
        </div>
      </div>
    </div>
  );
};

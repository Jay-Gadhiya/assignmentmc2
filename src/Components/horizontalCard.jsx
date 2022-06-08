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

  return (
    <div class="card-horizontal-wrapper">
      <div class="horizontal-card">
        <div class="card-horizontal-image">
          <img class="img-cards" src={product.img} alt="img" />
          <span class="badge-new hide">New</span>
          <span class="delete-icon hide">&times;</span>
        </div>
        <div class="card-details">
          <div class="card-item">
            <h1 class="card-product-name">{product.title}</h1>
            <span class="icon-card icon-heart">
              <i class="fas fa-heart"></i>
            </span>
          </div>
          <div class="card-price">
            Rs.
            <span class="price">{product.price}</span>
            <br />
            <br />
            <button onClick={() => increaseQuantity(product)} className="qty">+</button>
            <span class="price">Quantity : {product.qty}</span>
            <button onClick={() => decreaseQuantity(product)} className="qty">-</button>
          </div>
          <div class="card-btn">
              {
                  cartState.cartItems.find(item => item.id == product.id)
                  ?
                  <button onClick={() => removeFromCartHandler(product)} class="btn-card btn-primary-card">
                    <span class="icon-card">
                        <i class="fas fa-shopping-cart"></i>
                    </span>
                    Remove from cart
                  </button>
                  :
                  <button onClick={() => addToCartHandler(product)} class="btn-card btn-primary-card">
                    <span class="icon-card">
                        <i class="fas fa-shopping-cart"></i>
                    </span>
                    Add to Cart
                  </button>

              }

              {
                  cartState.saveLaterItems.find(item => item.id == product.id)
                  ?
                  <button onClick={() => removeFromCartHandler(product)} class="btn-card btn-wishlist">
                    <span class="icon-card">
                        <i class="fas fa-shopping-cart"></i>
                    </span>
                    Remove from cart
                </button>
                :
                <button onClick={() => saveToLaterHandler(product)} class="btn-card btn-wishlist">
                <span class="icon-card">
                    <i class="fas fa-shopping-cart"></i>
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

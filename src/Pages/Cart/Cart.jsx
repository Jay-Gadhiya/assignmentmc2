import { useEffect, useState } from "react";
import { ProductCard } from "../../Components/Card";
import { HorizontalCard } from "../../Components/horizontalCard";
import { useCart } from "../../Context/cartContext";
import "./cart.css";

export const CartPage = () => {

    const { cartState } = useCart();

    cartState.totalPrice =  cartState.totalPrice === -50 ? 0 :  cartState.totalPrice;

    return(
        <main className="cart-main-wrapper">
            <h2>Products in cart {cartState.cartItems.length}</h2>
            <div className="product-wrapper">
                {
                    cartState.cartItems.map(item => (
                        <HorizontalCard key={item.id} product={item} />
                    ))
                }
            </div>

            <div className="price-wrapper">
                <h2>Price details</h2>
                <br />
                <div className="price-det">
                    <h3>Discount</h3>
                    <p>Rs. 50</p>
                </div>

                <div className="price-det">
                    <h3>Total Price</h3>
                    <p>{cartState?.totalPrice}</p>
                </div>

            </div>

            <div className="price-wrapper">
                <h2>Saved items</h2>
                <br />

                <div className="saved-items">
                    {
                        cartState.saveLaterItems.map(item => (
                            <HorizontalCard key={item.id} product={item} />
                        ))
                    }
                </div>

            </div>
        </main>
        
    )
}
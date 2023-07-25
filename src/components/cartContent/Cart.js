import React, { useContext } from "react";
import ProductsContext from "../ProductsContext";
import "./Cart.css";

const Cart = () => {
    const { cartList } = useContext(ProductsContext);

    return (
        <div className="all-cart-product">
            <div>
                <h2>Item in Cart:</h2>
            </div>
            {cartList.map((oneProduct) => {
                const { id, title, description, image, price, quantity } = oneProduct;
                return (
                    <div className="cart-product" key={id}>
                        <div className="title">
                            <img src={image} alt={description} />
                            <p>{title}</p>
                        </div>
                        <div>
                            <p className="price">Price: {price} €</p>
                            <p>Quantity : {quantity} </p>
                        </div>
                    </div>
                );
            })}

            <div>
                Total price:
                {cartList.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                )}
                €
            </div>
        </div>
    );
};

export default Cart;

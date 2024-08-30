import React, {useContext} from 'react';
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import {currencyFormatter} from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import {UserProgressContext} from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

const Cart = () => {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);

    const cartTotal = cartContext.items.reduce((totalPrice, item) =>
            totalPrice + item.quantity * item.price,
        0);

    function handleCloseCart() {
        userProgressContext.hideCart();
    }

    function handleGoToCheckout() {
        userProgressContext.showCheckout();
    }

    return (
        <Modal
            className="cart"
            open={userProgressContext.progress === 'cart'}
            onClose={userProgressContext.progress === 'cart'? handleCloseCart : null}
        >
            <h2>Your Cart</h2>
            <ul>
                {cartContext.items.map(item => <li key={item.id}>
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onIncrease={() => cartContext.addItem(item)}
                        onDescrease={() => cartContext.removeItem(item.id)}
                    />
                </li>)}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartContext.items.length > 0 && (
                    <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
                )}
            </p>
        </Modal>
    );
};

export default Cart;
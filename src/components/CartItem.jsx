import React from 'react';
import {currencyFormatter} from "../util/formatting.js";

const CartItem = ({name, quantity, price, onIncrease, onDescrease}) => {
    return (
        <li className="cart-item">
            <p>{name} - {quantity} x {currencyFormatter.format(price)}</p>
            <p className="cart-item-actions">
                <button onClick={onDescrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    );
};

export default CartItem;
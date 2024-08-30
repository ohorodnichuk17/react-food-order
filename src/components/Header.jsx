import React, {useContext} from 'react';
import logo from '../assets/logo.jpg'
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";
import {UserProgressContext} from "../store/UserProgressContext.jsx";

const Header = () => {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);

    const totalCartItems = cartContext.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressContext.showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="A restaurant"/>
                <h1>Reactfood</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    );
};

export default Header;
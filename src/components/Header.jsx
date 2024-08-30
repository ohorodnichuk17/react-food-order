import React, {useContext} from 'react';
import logo from '../assets/logo.jpg'
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

const Header = () => {
    const context = useContext(CartContext);

    const totalCartItems = context.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="A restaurant"/>
                <h1>Reactfood</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    );
};

export default Header;
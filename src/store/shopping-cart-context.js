import {createContext} from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
    removeItemFromCart: () => {},
});

function shoppingCartReducer(state, action) {
    if(action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
        );

        const existingCartItem = updatedItems[existingCartItemIndex];

        if(existingCartItem) {
            updatedItems[existingCartItemIndex] = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
        } else {
            const meal = 
        }
    }

    return state;
}
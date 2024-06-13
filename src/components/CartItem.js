import React from 'react';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
    };

    const updateQuantity = (quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
    };

    return (
        <li>
            {item.name} - ${item.price} x {item.quantity}
            <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(Number(e.target.value))}
                min="1"
            />
            <button onClick={removeFromCart}>Remove</button>
        </li>
    );
};

export default CartItem;

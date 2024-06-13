import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const items = useSelector(state => state.cart.items);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {items.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default Cart;

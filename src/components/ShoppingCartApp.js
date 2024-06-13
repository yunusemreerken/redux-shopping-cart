import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const ShoppingCartApp = () => {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <ProductList />
            <Cart />
        </div>
    );
};

export default ShoppingCartApp;

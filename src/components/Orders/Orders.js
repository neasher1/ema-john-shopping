import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    // console.log(cart)

    const handleRemoveItem = (id) => {
        const remainingItems = cart.filter(product => product._id !== id);
        setCart(remainingItems);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length == 0 && <h3>You haven't item to reviewed, please <Link to='/shop'>Shop More</Link></h3>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/shipping'>
                        <button className='review-order'>Proceed to Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
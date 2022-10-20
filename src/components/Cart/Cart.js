import React from 'react';

const Cart = ({ cart }) => {
    // const { cart } = props;
    return (
        <div>
            <h2 className='order-summary'>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <p>Grand Total: </p>

            <button>
                <p>Clear Cart</p>
            </button>
            <button>
                <p>Review Order</p>
            </button>
        </div>
    );
};

export default Cart;
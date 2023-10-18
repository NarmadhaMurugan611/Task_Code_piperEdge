import React from 'react';

function ShoppingCart({ cart, setCart }) {
    const handleRemoveFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    const totalDiscountedPrice = cart.reduce(
        (total, selectedProduct) =>
            total + (selectedProduct.price - (selectedProduct.price * selectedProduct.discount) / 100),
        0
    );

    return (
        <>
            <div className="shop-app">
                <h1>Shopping Cart</h1>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Org Price</th>
                            <th>DiscountPercentage</th>
                            <th>Discounted Price</th>
                            <th>Vendor</th>
                            <th>Remove Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((selectedProduct, index) => (
                            <tr key={selectedProduct.id}>
                                <td>{index + 1}</td>
                                <td>{selectedProduct.name}</td>
                                <td>{selectedProduct.price}</td>
                                <td>{selectedProduct.discount}</td>
                                <td>
                                    {(selectedProduct.price - (selectedProduct.price * selectedProduct.discount) / 100).toFixed(2)}
                                </td>
                                <td>{selectedProduct.vendor}</td>
                                <td className='remove-cart'>
                                    <button
                                        className="remove-from-cart-button"
                                        onClick={() => handleRemoveFromCart(index)}
                                    >
                                        Remove Cart
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='to-shop'>
                <h1>Total Price: Rs. {totalDiscountedPrice.toFixed(2)}</h1>
            </div>
        </>
    );
}

export default ShoppingCart;

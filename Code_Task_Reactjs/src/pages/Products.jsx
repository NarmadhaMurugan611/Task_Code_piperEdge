import { useState, useEffect } from 'react';
import ShoppingCart from '../pages/ShoppingCart'
import axios from 'axios';


function Products() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };


    return (
        <div className='App'>
            <h1>Product Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Tags</th>
                        <th>Vendor</th>
                        <th>Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.tags}</td>
                            <td>{product.vendor}</td>
                            <td className='addcart'> <button
                                className="add-to-cart-button"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add To Cart
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ShoppingCart cart={cart} setCart={setCart} />
        </div>
    )
}

export default Products
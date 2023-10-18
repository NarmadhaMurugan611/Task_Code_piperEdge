import { useState, useEffect } from 'react';
import axios from 'axios';

function Discount() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const sortedVendors = Array.from(new Set(products.map((product) => product.vendor))).sort();

    const renderDiscount = (vendor, trade) => {
        const product = products.find((product) => product.vendor === vendor && product.tags.includes(trade));
        return product ? product.discount : 'N/A';
    };

    return (
        <div className="dis-app">
            <h1>Discount Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Vendor</th>
                        <th>Trade A</th>
                        <th>Trade B</th>
                        <th>Trade C</th>
                        <th>Trade D</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedVendors.map((vendor) => (
                        <tr key={vendor}>
                            <td>{vendor}</td>
                            <td>{renderDiscount(vendor, 'TRADE A')}</td>
                            <td>{renderDiscount(vendor, 'TRADE B')}</td>
                            <td>{renderDiscount(vendor, 'TRADE C')}</td>
                            <td>{renderDiscount(vendor, 'TRADE D')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Discount;

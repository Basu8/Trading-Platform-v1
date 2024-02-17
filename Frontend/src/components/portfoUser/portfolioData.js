import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import './portfolioData.css';
function PortfolioData({ username }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch product data from your API
        axios.get(`http://localhost:5001/portfolio/${username}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [username]);

    return (
        <section>
            <div className="table-heading">
                <h1>Your's Portfolio {username}</h1>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Stock Symbol</th>
                            <th>Company Name</th>
                            <th>Stock Type</th>
                            <th>Quantity</th>
                            <th>Purchase Price</th>
                            <th>Purchase Date</th>
                            <th>Current Price</th>
                            <th>Current value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index.Portfolio_id}>
                                <td>{item.Stock_Symbol}</td>
                                <td>{item.Company_name}</td>
                                <td>{item.Stock_type}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.Purchase_price}</td>
                                <td>{item.Purchase_date}</td>
                                <td>{item.Current_price}</td>
                                <td>{item.Current_value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    );
}

export default PortfolioData;
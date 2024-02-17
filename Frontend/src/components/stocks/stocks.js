import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './stocks.css'
export default function Stocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch stock data from the backend API
    axios
      .get('http://localhost:5001/stocks') // Assuming your backend is running on the same host and port
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching stocks:', error);
      });
  }, []);

  return (
    <section>
      <div className="table-heading">
      <h1>Stocks List</h1>
      </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Stock ID</th>
            <th>Company Name</th>
            <th>Symbol</th>
            <th>Stock Type</th>
            <th>Current Price</th>
            <th>Total Shares</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.Stock_id}>
              <td>{stock.Stock_id}</td>
              <td>{stock.Company_name}</td>
              <td>{stock.Symbol}</td>
              <td>{stock.Stock_type}</td>
              <td>{stock.Current_price}</td>
              <td>{stock.Total_shares}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
  );
}



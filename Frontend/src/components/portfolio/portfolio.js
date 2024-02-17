import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Portfolio() {
  const [tradeData, setTradeData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/trade')
      .then((res) => {
        //console.log(response.data);
        setTradeData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section>
    <div className='table-heading'>
      <h2>Portfolio</h2>
    </div>  
    <div>
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Date of trade</th>
            <th>Equity Name</th>
            <th>Equity Symbol</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
            <th>Settled</th>
            <th>Gross Profit/Loss</th>
            <th>Profit/Loss Percentage</th>
          </tr>
        </thead>
        <tbody>
          {tradeData.map((stock, index) => (
            <tr key={index}>
              <td>{stock.tradeID}</td>
              <td>{stock.date.substring(0, 10)}</td>
              <td>{stock.equityName}</td>
              <td>{stock.equitySymbol}</td>
              <td>{stock.buyPrice}</td>
              <td>
                {stock.sellPrice === null ? 'NA' : stock.sellPrice}
              </td>
              <td>{stock.isSettled === 0 ? 'No' : 'Yes'}</td>
              <td>
                {stock.sellPrice === null
                  ? 'NA'
                  : (stock.sellPrice - stock.buyPrice).toFixed(2)}
              </td>
              <td>
                {stock.sellPrice === null
                  ? 'NA'
                  : `${(((stock.sellPrice - stock.buyPrice) /
                      stock.buyPrice) *
                      100).toFixed(2)} %`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
}



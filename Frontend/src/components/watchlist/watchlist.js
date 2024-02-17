import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import './watchlist.module.css';

export default function Watchlist({ Username, Stock_id }) {
  const [watchlist, setWatchlist] = useState([]);
  const [newStock, setNewStock] = useState('');

  useEffect(() => {
    // Fetch user's watchlist data from the backend API
    axios
      .get(`http://localhost:5001/watchlist/${Username}/${Stock_id}`)
      .then((response) => {
        console.log('Watchlist data:', response.data); // Debugging: Log the response data
        setWatchlist(response.data);
      })
      .catch((error) => console.error('Error fetching watchlist data:', error));
  }, [Username, Stock_id]);

  const handleAddStock = () => {
    // Send a request to add the newStock to the watchlist
    axios
      .post('http://localhost:5001/watchlist/add', {
        Username: Username,
        Stock_id: Stock_id,
        Watch_list_name: newStock,
      })
      .then((response) => {
        console.log('Added stock:', response.data); // Debugging: Log the response data
        setWatchlist(response.data);
        setNewStock('');
      })
      .catch((error) => console.error('Error adding stock:', error));
  };

  const handleRemoveStock = (stockId) => {
    // Send a request to remove the stock from the watchlist
    axios
      .delete('http://localhost:5001/watchlist/remove', {
        data: {
          Username: Username,
          Stock_id: Stock_id,
        },
      })
      .then(() => {
        console.log('Removed stock with ID:', stockId); // Debugging: Log the removed stock ID
        setWatchlist((prevWatchlist) =>
          prevWatchlist.filter((item) => item.Stock_id !== stockId)
        );
      })
      .catch((error) => console.error('Error removing stock:', error));
  };

  return ( 
    <div>
       
      <h1>My Watchlist</h1>
      <div>
        <input
          type="text"
          placeholder="Enter stock ID"
          value={newStock}
          onChange={(e) => setNewStock(e.target.value)}
        />
        <button onClick={handleAddStock}>Add</button>
      </div>
      <ul>
        {watchlist.length > 0 ? (
          watchlist.map((item) => (
            <li key={item.Stock_id}>
              <span>{item.Watch_list_name}:</span> {item.Stock_id}
              <button onClick={() => handleRemoveStock(item.Stock_id)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>No items in the watchlist</p>
        )}
      </ul>
    </div>
  );
}

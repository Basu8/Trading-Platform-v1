import React, { useState, useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import axios from "axios";
import './trade.css';
export default function Trade() {
  const [equityName, setEquityName] = useState("");
  const [equitySymbol, setEquitySymbol] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedStock, setSelectedStock] = useState(""); // Track the selected stock
  const chartProperties = {
    width: 945,
    height: 450,
    timeScale: {
      timeVisible: true,
      secondsVisible: false,
    },
  };

  const domElementRef = useRef(null);

  // Assuming dateString is in the format "yyyy-mm-dd HH:mm:ss"
  function parseDateString(dateString) {
    const [datePart, timePart] = dateString.split(" ");
    const [year, month, day] = datePart.split("-");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  const clearErrors = () => {
    setErrors({});
  };

  const setError = (id, error) => {
    setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
  };

  const validateForm = (e) => {
    e.preventDefault();
    let returnval = true;
    clearErrors();

    const qtyValue = parseInt(quantity, 10);
    if (isNaN(qtyValue) || qtyValue <= 0) {
      setError(
        "bQuantity",
        "Quantity of equity shares bought cannot be zero or negative"
      );
      returnval = false;
    }

    if (returnval) {
      handleSellButtonClick();
    }
  };

  const handleSellButtonClick = async () => {
    debugger;

    const body = {
      sellPrice: buyPrice,
      equitySymbol,
      equityName,
      quantity,
    };
    try {
      const response = await axios.post("http://localhost:5001/sell", body);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch data and update the chart when selected stock changes
  useEffect(() => {
    if (selectedStock && domElementRef.current) {
      const [symbol, apiKey] = selectedStock.split(","); // Split into symbol and API key
      setTicks(symbol, apiKey);
      console.log(symbol, apiKey)
    }
    
  }, [selectedStock]);

  const setTicks = (symbol, apiKey) => {
    const queryURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

    axios
      .get(queryURL)
      .then((response) => {
        const data = response.data;
        const keys = Object.keys(data["Time Series (Daily)"]);
        const equitySymbol = data["Meta Data"]["2. Symbol"];
        let equityName = equitySymbol.replace(".BSE", "");
        console.log(equityName);
        const final = keys.map((currDate) => {
          return {
            time: parseDateString(currDate),
            open: parseInt(data["Time Series (Daily)"][currDate]["1. open"]),
            high: parseInt(data["Time Series (Daily)"][currDate]["2. high"]),
            low: parseInt(data["Time Series (Daily)"][currDate]["3. low"]),
            close: parseInt(data["Time Series (Daily)"][currDate]["4. close"]),
          };
        });

        setEquitySymbol(equitySymbol);
        setEquityName(equityName);

        // Create the chart and set data in a useEffect
        const createChartAndSetData = () => {
          // Clear the chart container before creating a new chart
          const container = domElementRef.current;
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }

          const chart = createChart(container, chartProperties);
          const candleSeries = chart.addCandlestickSeries();
          candleSeries.setData(final.reverse());
        };

        // Use a setTimeout to ensure that the chart is created after the data is sorted
        setTimeout(createChartAndSetData, 0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div id="container">
          <div >
          <div
           className="list" style={{
            display: "flex",
            flexDirection: "column", // Set column direction for the flex container
            width: "15%",
            height: "187px",
            margin: "5px",
            }}>
              <h2>List of Stocks</h2>
            <div className="stock-item">
              <a href="#hdfcbank" onClick={() => setTicks("HDFC.BSE", "EM59AG6PV9A7O843")}>
                HDFC Bank
              </a>
            </div>
            <div className="stock-item">
              <a href="#tatasteel" onClick={() => setTicks("TATASTEEL.BSE", "EM59AG6PV9A7O843")}>
                Tata Steel
              </a>
            </div>
            <div className="stock-item">
              <a href="#reliance" onClick={() => setTicks("RELIANCE.BSE", "EM59AG6PV9A7O843")}>
                Reliance
              </a>
            </div>
            <div className="stock-item">
              <a href="#sbi" onClick={() => setTicks("SBI.BSE", "EM59AG6PV9A7O843")}>
                Sbi
              </a>
            </div>
            <div className="stock-item">
              <a href="#hindalcoindustry" onClick={() => setTicks("HINDALCO.BSE", "EM59AG6PV9A7O843")}>
               Hindalco Ind
              </a>
            </div>
            <div className="stock-item">
              <a href="#tcs" onClick={() => setTicks("TCS.BSE", "EM59AG6PV9A7O843")}>
                Tcs
              </a>
            </div>
            <div className="stock-item">
              <a href="#wipro" onClick={() => setTicks("WIPRO.BSE", "EM59AG6PV9A7O843")}>
                Wipro
              </a>
            </div>
            <div className="stock-item">
              <a href="#techmehindra" onClick={() => setTicks("TECHM.BSE", "EM59AG6PV9A7O843")}>
                Tech Mehindra
              </a>
            </div>
            <div className="stock-item">
              <a href="#adaniport" onClick={() => setTicks("ADANIPORTS.BSE", "EM59AG6PV9A7O843")}>
                Adani Port
              </a>
            </div>
            <div className="stock-item">
              <a href="#ITC" onClick={() => setTicks("ITC.BSE", "EM59AG6PV9A7O843")}>
                Itc
              </a>
            </div>
            <div className="stock-item">
              <a href="#infosys" onClick={() => setTicks("INFY.BSE", "EM59AG6PV9A7O843")}>
                Infosys
              </a>
              </div>
            <div className="stock-item">
              <a href="#ongc" onClick={() => setTicks("ONGC.BSE", "EM59AG6PV9A7O843")}>
                Ongc
              </a>
            </div>
            <div className="stock-item">  
              <a href="#bharatetrolium" onClick={() => setTicks("BPCL.BSE", "EM59AG6PV9A7O843")}>
              Bharat Petro
              </a>
              </div>

          </div>
          
        <div  ref={domElementRef} style={{ display: 'flex', flexDirection: 'row-reverse', width: '99%', height: '450px',  }}  ></div>
          </div>
        <form id="buyForm" name="buyForm" onSubmit={validateForm}>
          <div className="container">
            <div className="box" id="Name">
              <input
                type="text"
                name="equityName"
                id="equityName"
                readOnly
                value={equityName}
              />
              <b>
                <span className="error">{errors.eqityName}</span>
              </b>
            </div>
            <div className="box" id="Symbol">
              <input
                type="text"
                name="equitySymbol"
                id="equitySymbol"
                readOnly
                value={equitySymbol}
              />
              <b>
                <span className="error">{errors.equitySymbol}</span>
              </b>
            </div>
            <div className="box" id="Price">
              <input
                type="number"
                name="buyPrice"
                id="buyPrice"
                value={buyPrice}
                onChange={(e) => setBuyPrice(e.target.value)}
              />
              <b>
                <span className="error">{errors.buyPrice}</span>
              </b>
            </div>
            <div className="box" id="quantity">
              <input
                type="number"
                name="quantity"
                id="bQuantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <b>
                <span className="error">{errors.bQuantity}</span>
              </b>
            </div>
            <div className="box" id="totalprice">
              <input type="number" name="totalPrice" id="totalPrice" />
              <b>
                <span className="error">{errors.totalPrice}</span>
              </b>
            </div>
          </div>
          <div className="buttons">
            <button className="btn">Buy</button>
            <button
              className="btn"
              id="sellButton"
              type="button"
              onClick={validateForm}
            >
              Sell
            </button>
          </div>
        </form>
      </div>

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"
      />

      <script src="https://unpkg.com/lightweight-charts@3.7.0/dist/lightweight-charts.standalone.production.js" />
    </div>
  );
}

//export default Trade; ref={domElementRef}

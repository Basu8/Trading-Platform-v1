//import React, { useEffect, useState } from "react";
//import { Routes, Route } from "react-router-dom";
//import Login from "./components/authentication/login";
//import SignupPage from "./components/signup/signuppage";
//import data form "./data";
/*
const App = () => {
  return (
    <div className="app">
      <div className="signup">
        <SignupPage/>
      </div>
      <div className="login">
        <Login/>
      </div>
    </div>
  );
};*/
/*
import Dashboard from "./pages/Dashboard/Dashboard";
import StockView from "./pages/StockView/StockView";

function App() {
    const [exchanges, setExchanges ] = useState([]);
    const [stocks,setStocks] = useState([]);

    const getData = () => {
        const exchanges = data.exchanges;
        const stocks = data.stocks;

        return {
            exchanges,
            stocks,
        };
    };

    useEffect(() => {
        const { exchanges, stocks } = getData();

        setExchanges(exchanges);
        setStocks(stocks);
    }, []);

    return (
        <div className="App">
            <Router>
                <Route
                exact
                path="/"
                render={(props) => (
                    <Dashboard
                        exchanges={exchanges}
                        stock={stocks}
                        setStocks={setStocks}
                        {...props}
                    />
                )}
                />
                <Route
                    path="/stocks/:ticker"
                    render={(props) => <StockView {...props} stocks={stocks} />}
                />
            </Router>
        </div>
    );
}*/
//export default App;

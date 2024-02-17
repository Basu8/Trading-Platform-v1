import React from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
export default function DashBoard() {
  const navigate = useNavigate();
  const buttonClickHandler = (e) => {
    const button = e.target;
    const buttonText = button.textContent;
    navigate(`/${buttonText}`);
  };
  return (
    <div className="dash-container">
      <section>
        <div className="h-full flex">
          <div className="options">
            <h2>Welcome</h2>
            <br />
            <button onClick={buttonClickHandler}>Trade</button>
            <button onClick={buttonClickHandler}>Portfolio</button>
            <button onClick={buttonClickHandler}>Company</button>
            <button onClick={buttonClickHandler}>Stocks</button>
            {/* <button onClick={buttonClickHandler}>Watchlist</button>
            <button onClick={buttonClickHandler}>PortfolioData</button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

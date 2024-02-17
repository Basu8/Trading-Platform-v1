import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './components/signup/signuppage';
import AuthComponent from './components/Auth/login';
import Dashboard from './components/dashboard/dashboard';
import Trade from './components/trade/trade';
import Portfolio from './components/portfolio/portfolio';
import Company from './components/Company/compDetail';
// import Watchlist from './components/watchlist/watchlist';
import StocksList from './components/stocks/stocks';
// import PortfolioData from './components/portfoUser/portfolioData';
// import ComplexNavbar from './components/Navbar';
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path:"/",
    element: <AuthComponent/>
  },
  {
    path:"/login",
    element: <AuthComponent/>
  },
  {
    path:"/signup",
    element: <SignUp/>
  },
  {
    path:"/dashboard",
    element: <Dashboard/>
  },
  {
    path:"/portfolio",
    element: (
      <>
        {/* <ComplexNavbar /> */}
        <Portfolio />
      </>
    ),
  },
  {
    path:"/trade",
    element: (
      <>
        {/* <ComplexNavbar /> */}
        <Trade />
      </>
    ),
  },
  {
    path:"/company",
    element: (
      <>
        {/* <ComplexNavbar /> */}
        <Company />
      </>
    ),
  },
  {
    path:"/stocks",
    element:(
      <>
        {/* <ComplexNavbar /> */}
        <StocksList />
      </>
    ),
  },
  // {
  //   path:"/watchlist",
  //   element: (
  //     <>
  //       {/* <ComplexNavbar /> */}
  //       <Watchlist />
  //     </>
  //   ),
  // },
  // {
  //   path:"/portfoliodata",
  //   element: (
  //     <>
  //       {/* <ComplexNavbar /> */}
  //       <PortfolioData />
  //     </>
  //   ),
  // },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    
);




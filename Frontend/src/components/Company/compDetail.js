import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './compDetail.css';
// import '../Navbar/index';
import ComplexNavbar from '../Navbar/index';
export default function CompDetail() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/companies`)
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
return (
  <section>
    {/* <ComplexNavbar />  */}
    <div className="table-heading">
      <h1>Company Data</h1>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Symbol</th>
            <th>Industry Type</th>
            <th>Headquarters</th>
            <th>Founded Date</th>
            <td>First_IPO_date</td>
            <td>First_IPO_valuation</td>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.Company_name}>
              <td>{company.Company_name}</td>
              <td>{company.Symbol}</td>
              <td>{company.Industry_type}</td>
              <td>{company.Headquarters}</td>
              <td>{company.Founded_date} </td>
              <td>{company.First_IPO_date}</td>
              <td>{company.First_IPO_valuation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);
}

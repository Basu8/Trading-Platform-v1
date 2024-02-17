import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./signuppage.css";
import { BsPerson } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
export default function SignUp() {
  //const [email, setEmail] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [name, setName] = useState('');
  //const [address, setAddress] = useState('');
  //const [contact, setContact] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log('Email: ',email);
    //console.log('Name: ', name);
    console.log("Username: ", username);
    console.log("Password: ", password);
    //console.log('Address: ',address);
    //console.log('Contact: ',contact);
    const data = {
      //email,
      //name,
      username,
      password,
    };

    axios
      .post("http://localhost:5001/signup", data)
      .then((res) => {
        if (res.data === "Signup Successful") {
          console.log("Signup Successful");
          navigate("/login");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div className="container-lol">
          <RingLoader
            color="rgba(188, 0, 158, 1)"
            cssOverride={true}
            size={200}
          />
        </div>
      ) : (
        <section>
          <div class="h-full flex">
            <div className="signup-box">
              <form onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <div className="input-box">
                  <span className="icon">{BsPerson}</span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label>Username</label>
                </div>
                {/* <div className='input-box'>
                                <span className='icon'>{FiLock}</span>
                                <input type='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                                <label>Name</label>
                            </div> 
                           
                            <div className='input-box'>
                                <span className='icon'>{FiLock}</span>
                                <input type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                                <label>Email</label>
                            </div>  */}
                <div className="input-box">
                  <span className="icon">{FiLock}</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label>Password</label>
                </div>
                <button type="submit">Signup</button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

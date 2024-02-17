import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { RingLoader } from "react-spinners";

export default function AuthComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const redirectSignup = () => {
    navigate("/signup");
  };

  /*const forgotPass = () => {
    navigate('/signup');
  }*/

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading animation

    const data = {
      username,
      password,
    };

    try {
      const response = await axios.post("http://localhost:5001/login", data);
      console.log("API Response:", response.data);

      if (response.data === "Login successful") {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);

      if (error.response && error.response.status === 401) {
        setError("Invalid Password. Please try again.");
        setUsername("");
        setPassword("");
      } else {
        setUsername("");
        setPassword("");
        setError("Invalid Username. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading animation regardless of success or error
    }
  };

  useEffect(() => {
    // Simulate loading animation on component mount
    const loadingTimeout = setTimeout(() => {
      setLoading(false); // Stop loading animation after a short delay
    }, 1500); // Adjust the delay time as needed

    return () => {
      clearTimeout(loadingTimeout); // Clear the timeout on component unmount
    };
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
            <div className="login-box">
              <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input-box">
                  <span className="icon">
                    <BsPerson />
                  </span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label>Username</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <FiLock />
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label>Password</label>
                </div>
                {error && <p className="error-message">{error}</p>}

                <button type="submit">Login</button>
                <button onClick={redirectSignup}>Signup</button>
                {/* create forgot component  */}
                {/* <a href="#" onClick={forgotPass}>Forgot Password</a> */}
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

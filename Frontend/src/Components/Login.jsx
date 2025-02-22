import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import useAuth from "../Context/useAuth";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const response = sessionStorage.getItem("Signup response");
  const bitteEinloggen = sessionStorage.getItem("Bitte einloggen");

  const api = axios.create({ baseURL: "http://localhost:8080" });

  // HandleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginCredentials = { email, password };

    try {

      const withCredentials = rememberMe;

      const response = await api.post("/api/account/login", loginCredentials, {
        headers: { "Content-Type": "application/json" },
        withCredentials: withCredentials,
      });

      console.log(response);

      const accessToken = response.data.user.accessToken;

      if(!rememberMe) {
        sessionStorage.setItem("accessToken", accessToken)
      }

      setAuth({
        isAuthenticated: true,
        user: response.data.user,
      });

      navigate("/lobby");

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);

      if (error.response.status === 400) {
        setErrorMessage("Bitte fülle alle Felder aus.");
      } else {
        setErrorMessage(error.response?.data);
        setEmail("");
        setPassword("");
      }
    }
  };

  useEffect(() => {

    return () => {
      console.log("Session Storage Eintrage gelöscht.")
      sessionStorage.removeItem("Bitte einloggen")
    };

  }, []);

  const handleCheckout = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div>
      <h2 style={{ backgroundColor: "Red" }}>{bitteEinloggen}</h2>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /> <br />
        <label htmlFor="password">Passwort: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /> <br />
        <label htmlFor="rememberMe">Angemeldet bleiben</label>
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={handleCheckout}
        />
        <br /> <br />
        <button type="submit" id="login" onclick={handleSubmit}>
          Login
        </button>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </form>
      <p>{response}</p>
      <br /> <br />
      <h2>Noch kein Konto?</h2>
      <NavLink to="/">
        <h2>Registriere dich jetzt</h2>
      </NavLink>
      <br />
      <br />
    </div>
  );
}

export default Login;


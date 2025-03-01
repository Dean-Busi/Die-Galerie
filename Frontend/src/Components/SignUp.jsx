import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import vanGogh from "../Assets/Bilder/vanGogh.webp";
import davinci from "../Assets/Bilder/daVinci.webp";
import LoadingScreen from "../Components/LoadingScreen";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Diese Zeile importiert die Umgebungsvariable
  const port = import.meta.env.VITE_API_URL;

  const api = axios.create({ baseURL: `${port}` });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = { email, password, confirmPassword };
 
    try {
      setLoading(true);
      const response = await api.post("/account/register", newUser);
      console.log(response.data.message);
      sessionStorage.setItem("Signup response", response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response?.data || "Registrierung fehlgeschlagen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="loading">
      {loading ? (
        <h2>Laden...</h2>
      ) : (
        <div id="signUpPage">
          <div id="introBanner">
            <h1>Die Galerie</h1>
            Das Gemälde-Portal, wie die bekanntesten Gemälder der Welt
            aufgelistet sind.
          </div>
          <br />
          <br />
          <div id="registrieren_flexbox">
            <img src={vanGogh} alt="Napoleon" id="vanGogh" />

            <div>
              <h1>Registrieren</h1>
              <form onSubmit={handleSubmit}>
                <br />
                <label>Email: </label> <br />
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br /> <br />
                <label>Passwort: </label> <br />
                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br /> <br />
                <label>Passwort bestätigen: </label> <br />
                <input
                  type="password"
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <br /> <br />
                <button type="submit">Registrieren</button>
                <br /> <br />
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              </form>
            </div>
            <img src={davinci} alt="Napoleon" id="daVinci" />
          </div>
          <h2>Schon registriert?</h2>
          <NavLink to="/login">
            <h2>Melde dich an</h2>
          </NavLink>

          <br />

          <h2>Preview</h2>

          <NavLink to="/lobby">
            <h2>Ein kleiner Vorgeschmack unserer Seite</h2>
          </NavLink>
          <br />

          <div id="vorteile_Registrieren">
            <h2>Vorteile beim Registrieren:</h2>
            <ul>
              <li>Siehe die gesamte Auswahl an</li>
              <li>Bewerte und kommentiere die Gemälder</li>
              <li>Kontaktiere den Schöpfer (mich)</li>
              <li>Angenehme Jazz-Hintergrundmusik spielt</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;

import React from "react";
import { useNavigate } from "react-router-dom";

function Kontakt() {
  const navigate = useNavigate();

  return (
    <div>
      <form>
        {/* Anrede */}
        <div>
          <label htmlFor="anrede">Anrede* </label> <br />
          <select name="anrede" id="anrede" required defaultValue="">
            <option disabled value="">Auswahl</option>
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
            <option value="Andere">Andere</option>
          </select>
        </div>
        <br />
        {/* Namen */}
        <div>
          <label htmlFor="vorName">Vorname* </label>
          <input type="text" id="vorName" name="vorName" required />
        </div>
        <br />
        <div>
          <label htmlFor="nachName">Nachname* </label>
          <input type="text" id="nachName" name="nachName" required />
        </div>
        <br /> <br />
        <div id="textAreaBox_Container">
          <label htmlFor="nachricht">Deine Nachricht* </label> <br />
          <textarea className="eingabeFelder" id="nachricht" name="nachricht" rows={15} cols={50} required />
        </div>
        <br />
        <div id="flexbox_button">
          <button type="submit" id="submitButton">Senden</button>
        </div>
      </form>
    </div>
  );
}

export default Kontakt;

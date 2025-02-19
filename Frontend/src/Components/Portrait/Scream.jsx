import stern1 from "../../Assets/Bilder/stern1.png";
import stern2 from "../../Assets/Bilder/stern2.png";
import stern3 from "../../Assets/Bilder/stern3.png";
import stern4 from "../../Assets/Bilder/stern4.png";
import stern5 from "../../Assets/Bilder/stern5.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

// Funktion für das Abspielen des Sounds beim Zurück-Buttons
const handleZurueckButton = () => {
  const audio = new Audio(backSound);
  audio.volume = 0.8;
  audio.play();
};

// Funktion für den Hover-Soundeffekt
const handleLogoOver = () => {
  const audio = new Audio(hover_sfx);
  audio.volume = 0.3;
  audio.play();
};

function MonaLisa() {

    // Scrollt das Fenster ganz oben sobald es aufgemacht wird
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>

      <h1>Mona Lisa</h1>

      <section className="character_page">
        <div className="flexbox_characters">
          <img
            src={batman}
            alt="Batman"
            style={{ width: "19%" }}
            className="characterImage"
          />
          <div className="flexbox_vertikal">
            <h2
              style={{
                color: "white",
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              Batman {/* Changed heading to "Batman" */}
            </h2>

            <p
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                textAlign: "left",
              }}
            >
              Erster Auftritt: 1939 <br /> <br /> {/* Corrected <br> tags */}
              Nach dem Mord an seinen Eltern als Kind schwor Bruce Wayne,
              Verbrechen zu bekämpfen. Er trainierte intensiv und nutzte sein
              Erbe, um sich als Meisterdetektiv und Kampfexperte zu entwickeln.
              So nahm er anschliessend die Persona des Batman an. Ohne
              Superkräfte verlässt er sich auf Intelligenz, Technik und
              körperliche Fähigkeiten. Als Batman beschützt er Gotham City,
              operiert aus seiner geheimen Höhle (Batcave) und arbeitet oft mit
              seinem Butler Alfred Pennyworth und Verbündeten wie Robin und
              Commissioner Gordon zusammen, um gegen Superschurken wie den Joker
              und Two-Face zu kämpfen.
            </p>
          </div>
          <img
            src={batman_liveAction}
            alt="Batman Live Action"
            style={{ width: "18%" }}
            className="characterImage"
          />
        </div>
        <br /> <br />
        <br /> <br />
        <footer className="footer">
          <h2
            style={{
              color: "white",
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            }}
          >
            Wieviele Punkte gibst du diesem Charakter?
          </h2>
          <br /> <br />
          {/* Formular */}
          <form method="POST">
            <label>
              <input type="radio" name="bewertung" value={1} />
              <img src={stern1} className="bewertungsStern" alt="" />
            </label>
            <label>
              <input type="radio" name="bewertung" value={2} />
              <img src={stern2} className="bewertungsStern" alt="" />
            </label>
            <label>
              <input type="radio" name="bewertung" value={3} />
              <img src={stern3} className="bewertungsStern" alt="" />
            </label>
            <label>
              <input type="radio" name="bewertung" value={4} />
              <img src={stern4} className="bewertungsStern" alt="" />
            </label>
            <label>
              <input type="radio" name="bewertung" value={5} />
              <img src={stern5} className="bewertungsStern" alt="" />
            </label>
            <br /> <br /> <br /> <br />
            <button type="submit">Absenden</button>
          </form>
          <br /> <br /> <br /> <br />
          <div style={{ textAlign: "center" }}>
            <NavLink
              to="/dc"
              className="zurueckZuStartseite"
              onClick={handleZurueckButton}
              onMouseOver={handleLogoOver}
            >
              Zurück zu DC Comics
            </NavLink>
          </div>
        </footer>
      </section>
    </>
  );
}

export default MonaLisa; // Changed the export name to match the function

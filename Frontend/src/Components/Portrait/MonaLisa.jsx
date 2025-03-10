import stern1 from "../../Assets/Bilder/stern1.png";
import stern2 from "../../Assets/Bilder/stern2.png";
import stern3 from "../../Assets/Bilder/stern3.png";
import stern4 from "../../Assets/Bilder/stern4.png";
import stern5 from "../../Assets/Bilder/stern5.png";
import useAuth from "../../Context/useAuth";
import monaLisa from "../../Assets/Bilder/MonaLisa.webp";
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

  const { auth } = useAuth();

  return (
    <section className="portrait_Page">
      <h1 style={{ fontSize: "3vw" }}>Mona Lisa</h1>
      <div className="flexbox_Portrait">
        <img src={monaLisa} alt="Batman" className="characterImage" />
        <div className="flexbox_vertikal">
          <p className="portraitParagraph">
            <br />
            <h3>Jahr: ca. 1506 <br /> <br />

            Künstler: Leondardo DaVinci (Italien)            
            </h3>

            Die Mona Lisa ist eines der bekanntesten Gemälde der Welt. Es zeigt
            eine Frau mit einem geheimnisvollen Lächeln, das zu einem der
            berühmtesten Merkmale des Bildes geworden ist. Das Gemälde befindet
            sich im Louvre-Museum in Paris und wurde dort 1797 ausgestellt. Die
            Identität der abgebildeten Frau ist nicht eindeutig geklärt, aber
            viele Historiker vermuten, dass es sich um Lisa Gherardini, die Frau
            des florentinischen Kaufmanns Francesco del Giocondo, handelt. Daher
            auch der Name La Gioconda im Italienischen. Die Mona Lisa ist
            bekannt für ihre innovative Verwendung von Licht und Schatten sowie
            für die sanften Übergänge zwischen den Gesichtszügen, was für die
            Zeit bahnbrechend war. Das Werk hat Generationen von Kunstexperten,
            Historikern und Bewunderern inspiriert und bleibt ein Meisterwerk
            der italienischen Renaissance.
          </p>
        </div>
      </div>
      <br /> <br />
      <footer className="footer">
        {auth.isAuthenticated && (
          <>
            <h2
              style={{
                color: "white",
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              Bewerte dieses Bild:
            </h2>
            <br /> 
            {/* Formular */}
            <div>
              <form method="POST">
                <div className="Bewertung">
                  <label className="radioButtons">
                    <input type="radio" name="bewertung" value={1} />1
                  </label>

                  <label className="radioButtons">
                    <input type="radio" name="bewertung" value={2} />2
                  </label>

                  <label className="radioButtons">
                    <input type="radio" name="bewertung" value={3} />3
                  </label>

                  <label className="radioButtons">
                    <input type="radio" name="bewertung" value={4} />4
                  </label>

                  <label className="radioButtons">
                    <input type="radio" name="bewertung" value={5} />5
                  </label>
                </div>
                <br />
       
            <div>

              <h2
                style={{
                  color: "white",
                  fontFamily:
                    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                }}
              >
                Deine Meinung zum Bild:
              </h2>
              <textarea
                id="textFeld"
                rows={10}
                cols={60}
                placeholder="Dein Kommentar"
              />
            </div> <br />
            <button type="submit">Absenden</button>
              </form>
            </div>
          </>
        )}

        <br /> <br />

        <div className="bildKommentierenFrage">
          {!auth.isAuthenticated && (
            <div>
              Möchtest du das Gemälde bewerten und kommentieren?
              <NavLink to="/login">
                <h2> Melde dich an</h2>
              </NavLink>
            </div>
          )}
        </div>
        <br /> 
        <div style={{ textAlign: "center" }}>
          <NavLink
            to="/lobby"
            className="zurueckZurLobby"
            onClick={handleZurueckButton}
            onMouseOver={handleLogoOver}
          >
            <h2>Zurück zur Lobby</h2>
          </NavLink>
        </div>
      </footer>
    </section>
  );
}

export default MonaLisa;

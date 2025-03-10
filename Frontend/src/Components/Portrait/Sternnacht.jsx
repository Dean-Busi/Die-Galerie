import stern1 from "../../Assets/Bilder/stern1.png";
import stern2 from "../../Assets/Bilder/stern2.png";
import stern3 from "../../Assets/Bilder/stern3.png";
import stern4 from "../../Assets/Bilder/stern4.png";
import stern5 from "../../Assets/Bilder/stern5.png";
import useAuth from "../../Context/useAuth";
import sternNacht from "../../Assets/Bilder/Sternnacht.webp";
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
      <h1 style={{ fontSize: "3vw" }}>Sternennacht</h1>
      <div className="flexbox_Portrait">
        <img src={sternNacht} alt="Batman" className="characterImage" />
        <div className="flexbox_vertikal">
          <p className="portraitParagraph">
            <h3>
              Jahr: 1889 <br /> <br />
              Künstler: Vincent van Gogh (Niederlande)
            </h3>
            Die Sternennacht von Vincent van Gogh wurde gemalt und zeigt einen
            dramatisch leuchtenden Nachthimmel über einem ruhigen Dorf. Der
            Himmel ist in wirbelnden, intensiven Farben dargestellt, die
            Bewegung und Energie vermitteln. Die Zypressen im Vordergrund stehen
            im Kontrast zum lebendigen Himmel und symbolisieren Stabilität. Das
            Gemälde spiegelt van Goghs innere Unruhe und seine psychischen
            Kämpfe wider, die er während seines Aufenthalts in einer
            Nervenheilanstalt erlebte. Es gilt als eines seiner bekanntesten
            Werke und ist heute im Museum of Modern Art in New York ausgestellt.
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
                </div>{" "}
                <br />
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

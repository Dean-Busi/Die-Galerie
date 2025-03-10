import stern1 from "../../Assets/Bilder/stern1.png";
import stern2 from "../../Assets/Bilder/stern2.png";
import stern3 from "../../Assets/Bilder/stern3.png";
import stern4 from "../../Assets/Bilder/stern4.png";
import stern5 from "../../Assets/Bilder/stern5.png";
import useAuth from "../../Context/useAuth";
import venus from "../../Assets/Bilder/Venus.webp";
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
      <h1 style={{ fontSize: "3vw" }}>Venus</h1>
      <div className="flexbox_Portrait">
        <img src={venus} alt="Batman" className="characterImage" />
        <div className="flexbox_vertikal">
          <p className="portraitParagraph">
            <h3>
              Jahr: ca. 1485 <br /> <br />
              Künstler: Sandro Botticelli (Italien)
            </h3>
            Die Geburt der Venus zeigt die Göttin Venus, die auf einer Muschel
            aus dem Meer emporsteigt. Sie wird von zwei mythischen Wesen
            begleitet, die sie mit einem Tuch bedecken und den Wind erzeugen,
            der sie an den Strand bringt. Das Gemälde ist bekannt für seine
            Eleganz, die Detailgenauigkeit und die idealisierte Darstellung des
            menschlichen Körpers. Venus wird als Symbol der Schönheit, Liebe und
            Fruchtbarkeit dargestellt, und das Bild ist ein Meisterwerk der
            italienischen Renaissance. Es befindet sich heute in den Uffizien in
            Florenz und ist eines der berühmtesten Werke der westlichen
            Kunstgeschichte.
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

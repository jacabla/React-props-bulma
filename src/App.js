import "./App.css";
import PofileCard from "./PofileCard";
import alexa from "./images/alexa.png";
import cortana from "./images/cortana.png";
import siri from "./images/siri.png";
import "bulma/css/bulma.css"; //se importa de la carpeta solo el archivo que se necesita

function App() {
  return (
    <div>
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="title">Personal devices</div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <PofileCard
                title={"Alexa"}
                handle={"From google"}
                imageSrc={alexa}
                description={"text goes here"}
              />
            </div>
            <div className="column is-3">
              <PofileCard
                title={"Cortana"}
                handle={"From Microsoft"}
                imageSrc={cortana}
                description={"text goes here"}
              />
            </div>
            <div className="column is-3">
              <PofileCard
                title={"Siri"}
                handle={"From Apple"}
                imageSrc={siri}
                description={"text goes here"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

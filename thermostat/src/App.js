import logo from './logo.svg';
import './App.css';

function NidHamster() {
  const [temperature, setTemperature] = React.useState(0);

  let message = "";

  // Si temperature > 10
  // message = "trop chaud";

  // Sinon, si temperature < 3
  // message = "Trop froid, gla gla";

  // Sinon,
  // message = "OK, c'est parfait";

  return (
    <div>
      <h4>Témpérature actuelle : [Afficher ici la température]</h4>
      <p>Le Hamster dit : {message}</p>
      <img
        src="https://www.zoopro.fr/www/zoopro/static/images/illustrations/connaissances-hamsters.jpg"
        alt="Image du Hamster"
      />
      <button onClick={augmenterTemperature}>Plus chaud</button>
      <button>Plus froid</button>
    </div>
  )

  /**
   * Cette fonction appelle setTemperature et lui donne la valeur de temperature + 1
   */
  function augmenterTemperature() {

  }
}

function App() {
  return (
    <div className="App">
      <NidHamster/>
    </div>
  );
}

export default App;

import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function NidHamster() {
  const [temperature, setTemperature] = React.useState(0);

  let message = "";
  // Si temperature > 10
  if (temperature > 10) {
    message = "Trop chaud";
  }
  else if (temperature < 3) {
    message = "Trop froid, gla gla";
  }
  // else if (temperature > 3 && temperature < 10){
  else {
    message = "OK, c'est parfait";
  }

  const possibleTemperatures = [1,2,3,4,5,6];
  const lowerTemperatures = [1,2,3,4,5,6,7,8];

  return (
    <div className="NidHamster">
      <h4>Témpérature actuelle : {temperature}</h4>
      <p>Le Hamster dit : {message}</p>
      <img
        onClick={() => augmenterTemperature(1)}
        src="https://www.zoopro.fr/www/zoopro/static/images/illustrations/connaissances-hamsters.jpg"
        alt="Image du Hamster"
      />
      <div>
        <div>
          {possibleTemperatures.map(function(temperature) {
            // console.log(temperature);
            return (
              <button onClick={() => augmenterTemperature(temperature)}>
                {temperature}
              </button>
            )
          })}
        </div>
        <div>
          {/* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {lowerTemperatures.map(temperature => (
            <button onClick={() => diminuerTemperature(temperature)}>
              {temperature}
            </button>
          ))}
        </div>
        <div>
          <h4>Augmenter</h4>
          <PrimaryButton innerText="+1" isBig click={() => augmenterTemperature(1)}/>
          <PrimaryButton innerText="+2" isBig click={() => augmenterTemperature(2)}/>
          <PrimaryButton innerText="+3" isBig click={() => augmenterTemperature(3)}/>
        </div>
        <div>
          <h4>Diminuer</h4>
          {lowerTemperatures.map(value => <SecondaryButton
            click={() => diminuerTemperature(value)}
            text={value}
            isBig
            isDisabled={temperature < -5}
          />)}
        </div>
      </div>
      <div>
        <button onClick={() => dire("Bonjour")}>
          Dire "Bonjour"
        </button>
        <button onClick={() => dire("Au revoir")}>
          Dire "Au revoir"
        </button>
      </div>
    </div>
  )

  function dire(text) {
    console.log(text);
  }
  /*
    function direBonjour() {
      console.log("Bonjour");
    }

    function direAuRevoir() {
      console.log("Au revoir");
    }*/

  function diminuerTemperature(temperatureValue) {
    console.log(temperatureValue);
    if (temperature >= -5) {
      setTemperature(temperature - temperatureValue);
    }
    else {
      alert("Le hamster va mourir congelé")
    }
  }

  /**
   * Cette fonction appelle setTemperature et lui donne la valeur de temperature + 1
   */
  function augmenterTemperature(number) {
    console.log(number);
    setTemperature(temperature + number);
  }
}

export default NidHamster;

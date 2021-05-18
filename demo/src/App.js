// import logo from './logo.svg';
import './App.css';

// Le fichier est mis à jour en direct grâce au Hot Reloading

function List() {
  return (
    <ul>
      <li>Manger</li>
      <li>Boire</li>
      <li>Dormir</li>
    </ul>
  )
}

function PrimaryButton({innerText, isBig, isDisabled}) {
  // Ici c'est le JS pur
  let className = "";

  // Si isBig est égal à true alors className = "PrimaryButton PrimaryButton--big"
  if (isBig === true) {
    className = "PrimaryButton PrimaryButton--big"
  }
  else if (isDisabled) {
    className = "PrimaryButton PrimaryButton--isDisabled"
  }
  // Sinon, className = "PrimaryButton"
  else {
    className = "PrimaryButton";
  }


  // Ici c'est le HTML mélangé avec le JS ({})
  // Pour changer le style, aller dans App.css
  return (
    <button className={className}>
      {innerText}
    </button>
  )
}

function SecondaryButton({text, isBig, isDisabled}) {
  let finalClassName = "SecondaryButton";

  if (isBig) {
    finalClassName += " SecondaryButtonBig";
    // finalClassName = finalClassName + " SecondaryButtonBig";
  }

  if (isDisabled) {
    finalClassName += " SecondaryButtonDisabled";
  }

  return (
    <button className={finalClassName}>{text}</button>
  )
}

function App() {
  // Ici c'est le JS pur


  // Ici c'est le HTML mélangé avec le JS ({})
  return (
    <div className="App">
      <h1>Ma première</h1>
      <p>Ceci est un paragraphe</p>
      <div>
        <p>Et ceci un autre paragraphe</p>
        <List></List>
      </div>
      <div>
        <PrimaryButton innerText="Acheter" isBig={true} isDisabled={true}/>
        <PrimaryButton innerText="Se plaindre"/>
        <PrimaryButton innerText="Désactivé" isDisabled={true}/>
      </div>
      <div>
        <h3>Secondary Buttons</h3>
        <SecondaryButton
          text={"Grand et désactivé"}
          isBig={true}
          isDisabled
        />
        <SecondaryButton
          text={"Désactivé"}
          isDisabled
        />
        <SecondaryButton
          text={"Classique"}
        />
        {/* équivalent à isDisabled={true} */}
      </div>
    </div>
  );
}

export default App;

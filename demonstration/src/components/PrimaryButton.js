
export default function PrimaryButton({innerText, isBig, isDisabled, click}) {
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
    <button className={className} onClick={click}>
      {innerText}
    </button>
  )
}

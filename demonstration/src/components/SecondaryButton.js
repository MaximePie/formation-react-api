
export default function SecondaryButton({text, isBig, isDisabled, click}) {
  let finalClassName = "SecondaryButton";

  if (isBig) {
    finalClassName += " SecondaryButtonBig";
    // finalClassName = finalClassName + " SecondaryButtonBig";
  }

  if (isDisabled) {
    finalClassName += " SecondaryButtonDisabled";
  }

  return (
    <button className={finalClassName} onClick={click}>{text}</button>
  )
}

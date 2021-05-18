import React from "react";

// https://docs.thecatapi.com/

const url = "https://api.thecatapi.com/v1/images/search";
const url2 = "https://api.thecatapi.com/v1/images/search?limit=3";

export default function CatsPage() {
  // const [cat, setCat] = React.useState({});
  const [cats, setCats] = React.useState([]);
  // console.log(cat);
  return (
    <div className="CatsPage">
      <p>{url}</p>
      {cats.map(cat => (
        <div>
          <h4>Taille : {cat.height}</h4>
          <p>Largeur : {cat.width}</p>
          <img src={cat.url} alt="Image chat"/>
        </div>
      ))}
      <button onClick={fetchPicture}>Fetch Cat</button>
    </div>
  )

  /**
   * Cette fonction va chercher des informations dans l'API cats à l'url renseignée
   */
  function fetchPicture() {
    fetch(url2).then(response => response.json()).then(data => {
      // console.log(data);
      // setCat(data[0]);
      setCats(data);
    })
  }
}

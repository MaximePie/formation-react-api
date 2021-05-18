import React from "react";
// https://data.iledefrance.fr/explore/dataset/evenements-publics-cibul/api
const url = "https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district";

export default function Agenda() {
  const [listeEvents, setListeEvents] = React.useState([]);
  const [listSize, setListSize] = React.useState(3);

  const agendaStyle = {
    border: "solid",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "4px",
  };

  // https://fr.reactjs.org/docs/hooks-effect.html
  // Morceau de code à exécuter quand il se passe quelque chose.
  React.useEffect(() => fetchInfo(1), []);
  React.useEffect(() => fetchInfo(1), [listSize]);
  // React.useEffect(() => fetchInfo(1), ); // Quand un state change
  // React.useEffect(() => fetchInfo(1), [listSize]); // Quand le state listSize change



  return (
    <div style={agendaStyle}>
      <p>Amélioration : Faire en sorte que quand on sélectionne une taille d'échantillon, on reste sur la même page</p>
      <div style={{marginBottom: "1rem"}}>
        <h4>Taille de l'échantillon : {listSize}</h4>
        <select onChange={updateListSize}>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
        <h3>Pagination</h3>
        <button onClick={() => fetchInfo(1)}>1</button>
        <button onClick={() => fetchInfo(2)}>2</button>
        <button onClick={() => fetchInfo(3)}>3</button>
        <button onClick={() => fetchInfo(4)}>4</button>
        <button onClick={() => fetchInfo(5)}>5</button>
      </div>
      <div>
        {listeEvents.map(function(event) {
          // const image = event.fields.image;
          // const title = event.fields.title;
          // const description = event.fields.description;
          const {image, title, description} = event.fields;

          return (
            <div>
              <img src={image} alt=""/>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )

  /**
   * Cette fonction va mettre à jour listSize avec la valeur reçue
   * en paramètre.
   * @param event
   */
  function updateListSize(event) {
    setListSize(event.target.value);
  }

  function fetchInfo(page) {
    console.log(page);
    // 1 : 0
    // 2 : 3
    // 3 : 6
    // 4 : 9
    // 5 : 12

    let startValue = (page - 1) * 3;
    let finalUrl = url + "&rows=" + listSize + "&start=" + startValue;

    fetch(finalUrl).then(response => response.json()).then(data => {
      // https://developer.mozilla.org/fr/docs/Glossary/Falsy
      if (data.records) {
        setListeEvents(data.records);
      }
    })
  }
}

// Chargement des dépendances (librairie React ici)
import React from 'react';


/*
 * API OpenData de la région Ile-de-France :
 * https://data.iledefrance.fr/explore/dataset/evenements-publics-cibul/api
 *
 * URL finale à appeler en HTTP GET, récupère 36 résultats (paramètre rows)
 */

// https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=10&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district
const url = "https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=10&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district";
export default function Agenda() {
  return (
    <div>
      <p>Afficher les événements ici</p>
      <div>
        <p>Afficher la pagination ici</p>
      </div>
      <button onClick={fetchData}>Fetch</button>
    </div>
  )

  function fetchData() {
    fetch(url).then(response => response.json()).then(data => {
      console.log(data);
    })
  }
}

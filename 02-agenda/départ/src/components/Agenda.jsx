// Chargement des dépendances (librairie React ici)
import React from 'react';


/*
 * API OpenData de la région Ile-de-France : 
 * https://data.iledefrance.fr/explore/dataset/evenements-publics-cibul/api
 *
 * URL finale à appeler en HTTP GET, récupère 36 résultats (paramètre rows)
 */

const url = "https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=5&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district"

// Composant React de type classe : le plus simple lorsqu'il y a du state
export class Agenda extends React.Component {

  constructor() {
    super();

    this.state = {
      events: [],
      currentPage: 1,
    };

    this.fetchEvents = this.fetchEvents.bind(this);
  }

  componentDidMount() {
    this.fetchEvents();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.currentPage !== this.state.currentPage) {
      this.fetchEvents();
    }
  }

  render() {

    return (
      <>
        <button onClick={this.fetchEvents}>Fetch</button>
        <div>
          <h2>Page actuelle : {this.state.currentPage}</h2>
          <button onClick={() => this.changePage(1)}>1</button>
          <button onClick={() => this.changePage(2)}>2</button>
          <button onClick={() => this.changePage(3)}>3</button>
          <button onClick={() => this.changePage(4)}>4</button>
          <button onClick={() => this.changePage(5)}>5</button>
        </div>
        <section className="card-list">
          {this.state.events.map(event => (
            <p>
              <img style={{height: "300px"}} src={event.fields.image} alt=""/>
            </p>
          ))}
        </section>
      </>
    );
  }

  /**
   * Mettre à jour le state currentPage avec le newPagenumber reçu en paramètre
   * @param newPageNumber
   */
  changePage = (newPageNumber) => {
    this.setState({
      currentPage: newPageNumber
    })
  }

  fetchEvents() {
    let startIndex = (this.state.currentPage - 1) * 5; // Si currentPage = 2, alors startIndex = 5.
    let finalUrl = url;
    finalUrl += "&start=" + startIndex;

    fetch(finalUrl).then(response => response.json()).then(response => {
      this.setState({
        events: response.records,
      })
    });
  }
}

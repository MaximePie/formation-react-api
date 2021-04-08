import React from 'react';

export default class MielPage extends React.Component {

  constructor() {
    super();
    this.state = {
      miels: [],
    }
  }

  render() {
    return (
      <div>
        {/*{this.state.miels.map(miel => <p>{miel}</p>)}*/}
        {this.state.miels.map(function(miel) {
          return (
            <p>
              {miel}
            </p>
          )
        })}
        <button onClick={this.fetchMiels}>Fetch Miel </button>
      </div>
    )
  }

  fetchMiels = () => {
    fetch('http://localhost:8000/api/miel').then(response => response.json()).then(response => {
      console.log(response);
      this.setState({
        miels: response.data,
      })
    })
  }
}

import React from "react";

export default class App extends React.Component {

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
        {this.state.miels.map(function(baba) {
          return (
            <p>
              {baba}
            </p>
          )
        })}
        <button onClick={this.fetchMiels}>Fetch</button>
      </div>
    )
  }

  fetchMiels = () => {
    fetch('http://localhost:8000/miel').then(response => response.json()).then(response => {
      console.log(response);
      this.setState({
        miels: response.data,
      })
    })
  }
}

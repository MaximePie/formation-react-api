import React from 'react';

export default class Popcorn extends React.Component {

  constructor() {
    super();
    this.state = {
      popcorn: [],
    }
  }

  render() {
    return (
      <div>
        {/*{this.state.popcorn.map(miel => <p>{miel}</p>)}*/}
        {this.state.popcorn.map(function(popcorn) {
          return (
            <p>
              {popcorn}
            </p>
          )
        })}
        <button onClick={this.fetchPopcorn}>Fetch Popcorn</button>
      </div>
    )
  }

  fetchPopcorn = () => {
    fetch('http://localhost:8000/popcorn').then(response => response.json()).then(response => {
      console.log(response);
      this.setState({
        popcorn: response,
      })
    })
  }
}
